/**
 * @name side
 * @class L.Control.side
 * @extends L.Control
 * @param {string} id - The id of the side element (without the # character)
 * @param {Object} [options] - Optional options object
 * @param {string} [options.position=left] - Position of the side: 'left' or 'right'
 * @see L.control.side
 */
L.Control.side = L.Control.extend(/** @lends L.Control.side.prototype */ {
    includes: (L.Evented.prototype || L.Mixin.Events),

    options: {
        position: 'center'
    },

    initialize: function (id, options) {
        var i, child;

        L.setOptions(this, options);

        // Find side HTMLElement
        this._side = L.DomUtil.get(id);

        // Attach .side-left/right class
        L.DomUtil.addClass(this._side, 'side-' + this.options.position);

        // Attach touch styling if necessary
        if (L.Browser.touch)
            L.DomUtil.addClass(this._side, 'leaflet-touch');

        // Find side > div.side-content
        for (i = this._side.children.length - 1; i >= 0; i--) {
            child = this._side.children[i];
            if (child.tagName == 'DIV' &&
                    L.DomUtil.hasClass(child, 'side-content'))
                this._container = child;
        }

        // Find side ul.side-tabs > li, side .side-tabs > ul > li
        this._tabitems = this._side.querySelectorAll('ul.side-tabs > li, .side-tabs > ul > li');
        for (i = this._tabitems.length - 1; i >= 0; i--) {
            this._tabitems[i]._side = this;
        }

        // Find side > div.side-content > div.side-pane
        this._panes = [];
        this._closeButtons = [];
        for (i = this._container.children.length - 1; i >= 0; i--) {
            child = this._container.children[i];
            if (child.tagName == 'DIV' &&
                L.DomUtil.hasClass(child, 'side-pane')) {
                this._panes.push(child);

                var closeButtons = child.querySelectorAll('.side-close');
                for (var j = 0, len = closeButtons.length; j < len; j++)
                    this._closeButtons.push(closeButtons[j]);
            }
        }
    },

    /**
     * Add this side to the specified map.
     *
     * @param {L.Map} map
     * @returns {side}
     */
    addTo: function (map) {
        var i, child;

        this._map = map;

        for (i = this._tabitems.length - 1; i >= 0; i--) {
            child = this._tabitems[i];
            var sub = child.querySelector('a');
            if (sub.hasAttribute('href') && sub.getAttribute('href').slice(0,1) == '#') {
                L.DomEvent
                    .on(sub, 'click', L.DomEvent.preventDefault )
                    .on(sub, 'click', this._onClick, child);
            }
        }

        for (i = this._closeButtons.length - 1; i >= 0; i--) {
            child = this._closeButtons[i];
            L.DomEvent.on(child, 'click', this._onCloseClick, this);
        }

        return this;
    },

    /**
     * @deprecated - Please use remove() instead of removeFrom(), as of Leaflet 0.8-dev, the removeFrom() has been replaced with remove()
     * Removes this side from the map.
     * @param {L.Map} map
     * @returns {side}
     */
     removeFrom: function(map) {
         console.log('removeFrom() has been deprecated, please use remove() instead as support for this function will be ending soon.');
         this.remove(map);
     },

    /**
     * Remove this side from the map.
     *
     * @param {L.Map} map
     * @returns {side}
     */
    remove: function (map) {
        var i, child;

        this._map = null;

        for (i = this._tabitems.length - 1; i >= 0; i--) {
            child = this._tabitems[i];
            L.DomEvent.off(child.querySelector('a'), 'click', this._onClick);
        }

        for (i = this._closeButtons.length - 1; i >= 0; i--) {
            child = this._closeButtons[i];
            L.DomEvent.off(child, 'click', this._onCloseClick, this);
        }

        return this;
    },

    /**
     * Open side (if necessary) and show the specified tab.
     *
     * @param {string} id - The id of the tab to show (without the # character)
     */
    open: function(id) {
        var i, child;

        // hide old active contents and show new content
        for (i = this._panes.length - 1; i >= 0; i--) {
            child = this._panes[i];
            if (child.id == id)
                L.DomUtil.addClass(child, 'active');
            else if (L.DomUtil.hasClass(child, 'active'))
                L.DomUtil.removeClass(child, 'active');
        }

        // remove old active highlights and set new highlight
        for (i = this._tabitems.length - 1; i >= 0; i--) {
            child = this._tabitems[i];
            if (child.querySelector('a').hash == '#' + id)
                L.DomUtil.addClass(child, 'active');
            else if (L.DomUtil.hasClass(child, 'active'))
                L.DomUtil.removeClass(child, 'active');
        }

        this.fire('content', { id: id });

        // open side (if necessary)
        if (L.DomUtil.hasClass(this._side, 'collapsed')) {
            this.fire('opening');
            L.DomUtil.removeClass(this._side, 'collapsed');
        }

        return this;
    },

    /**
     * Close the side (if necessary).
     */
    close: function() {
        // remove old active highlights
        for (var i = this._tabitems.length - 1; i >= 0; i--) {
            var child = this._tabitems[i];
            if (L.DomUtil.hasClass(child, 'active'))
                L.DomUtil.removeClass(child, 'active');
        }

        // close side
        if (!L.DomUtil.hasClass(this._side, 'collapsed')) {
            this.fire('closing');
            L.DomUtil.addClass(this._side, 'collapsed');
        }

        return this;
    },

    /**
     * @private
     */
    _onClick: function() {
        if (L.DomUtil.hasClass(this, 'active'))
            this._side.close();
        else if (!L.DomUtil.hasClass(this, 'disabled'))
            this._side.open(this.querySelector('a').hash.slice(1));
    },

    /**
     * @private
     */
    _onCloseClick: function () {
        this.close();
    }
});

/**
 * Creates a new side.
 *
 * @example
 * var side = L.control.side('side').addTo(map);
 *
 * @param {string} id - The id of the side element (without the # character)
 * @param {Object} [options] - Optional options object
 * @param {string} [options.position=left] - Position of the side: 'left' or 'right'
 * @returns {side} A new side instance
 */
L.control.side = function (id, options) {
    return new L.Control.side(id, options);
};
