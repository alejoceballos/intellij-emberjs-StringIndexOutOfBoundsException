'use strict';



;define('tellersdesk-front/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        namespace: 'api'
    });
});
;define('tellersdesk-front/app', ['exports', 'tellersdesk-front/resolver', 'ember-load-initializers', 'tellersdesk-front/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const App = Ember.Application.extend({
        modulePrefix: _environment.default.modulePrefix,
        podModulePrefix: _environment.default.podModulePrefix,
        Resolver: _resolver.default
    });

    (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

    exports.default = App;
});
;define("tellersdesk-front/cldrs/en", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ "locale": "en-US", "parentLocale": "en" }, { "locale": "en", "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } }];
});
;define('tellersdesk-front/components/characters/character-attributes-sheet/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',

    /**
     * @property character
     * @type {DS.Model}
     * @public
     */
    character: null,

    /**
     * @property readOnly
     * @type {Boolean}
     * @default false
     * @public
     */
    readOnly: false
  });
});
;define("tellersdesk-front/components/characters/character-attributes-sheet/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+6kBWVwi", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"character_attr_list_container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"character_attr_list_container--type\"],[9],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.strength\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"strength\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"strength\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.dexterity\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"dexterity\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"dexterity\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.stamina\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"stamina\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"stamina\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[1,[23,[\"character\",\"physicalAttributesTotal\"]],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"character_attr_list_container--type\"],[9],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.charisma\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"charisma\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"charisma\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.manipulation\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"manipulation\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"manipulation\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.appearance\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"appearance\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"appearance\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[1,[23,[\"character\",\"socialAttributesTotal\"]],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"character_attr_list_container--type\"],[9],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.perception\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"perception\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"perception\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.intelligence\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"intelligence\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"intelligence\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.attributes.label.wits\"],null],false],[0,\":\"],[10],[0,\"\\n            \"],[1,[27,\"level-picker\",null,[[\"readOnly\",\"currentValue\",\"max\"],[[23,[\"readOnly\"]],[23,[\"character\",\"wits\"]],[23,[\"character\",\"maxAttributeLevel\"]]]]],false],[0,\"\\n            (\"],[1,[23,[\"character\",\"wits\"]],false],[0,\")\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[1,[23,[\"character\",\"mentalAttributesTotal\"]],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/character-attributes-sheet/template.hbs" } });
});
;define('tellersdesk-front/components/characters/character-info-sheet/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',

    /**
     * @property character
     * @type {DS.Model}
     * @public
     */
    character: null,

    /**
     * @property readOnly
     * @type {Boolean}
     * @default false
     * @public
     */
    readOnly: false
  });
});
;define("tellersdesk-front/components/characters/character-info-sheet/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aikfavc0", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"character_info_list_container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"character_info--name\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.info.label.name\"],null],false],[0,\":\"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"readOnly\"]]],null,{\"statements\":[[0,\"                \"],[1,[23,[\"character\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[1,[27,\"input\",null,[[\"value\"],[[23,[\"character\",\"name\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"character_info--other\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.info.label.age\"],null],false],[0,\":\"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"readOnly\"]]],null,{\"statements\":[[0,\"                ?\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[7,\"input\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"character_info--other\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[1,[27,\"t\",[\"character.info.label.gender\"],null],false],[0,\":\"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"readOnly\"]]],null,{\"statements\":[[0,\"                ?\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[7,\"input\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/character-info-sheet/template.hbs" } });
});
;define('tellersdesk-front/components/characters/character-list/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        tagName: 'table',

        characters: Ember.A(),

        onItemView: null,

        onItemUpdate: null,

        onItemDelete: null,

        actions: {
            itemView(character) {
                this.onItemView(character);
            },

            itemUpdate(character) {
                this.onItemUpdate(character);
            },

            itemDelete(character) {
                this.onItemDelete(character);
            }
        }

    });
});
;define('tellersdesk-front/components/characters/character-list/list-item/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    /**
     * @inheritDoc
     */
    tagName: 'tr',

    /**
     * @property character
     * @type {DS.Model}
     * @public
     */
    character: null,

    /**
     * @property onView
     * @type {Function}
     * @public
     */
    onView: null,

    /**
     * @property onUpdate
     * @type {Function}
     * @public
     */
    onUpdate: null,

    /**
     * @property onDelete
     * @type {Function}
     * @public
     */
    onDelete: null,

    actions: {
      /**
       * @method view
       * @param {DS.Model} character
       */
      view(character) {
        this.onView(character);
      },

      /**
       * @method update
       * @param {DS.Model} character
       */
      update(character) {
        this.onUpdate(character);
      },

      /**
       * @method delete
       * @param {DS.Model} character
       */
      delete(character) {
        this.onDelete(character);
      }
    }
  });
});
;define("tellersdesk-front/components/characters/character-list/list-item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ltnyqe6d", "block": "{\"symbols\":[],\"statements\":[[7,\"td\"],[9],[1,[23,[\"character\",\"name\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[1,[23,[\"character\",\"physicalAttributesTotal\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[1,[23,[\"character\",\"socialAttributesTotal\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[1,[23,[\"character\",\"mentalAttributesTotal\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"view\",[23,[\"character\"]]]],[9],[0,\"\\n        \"],[1,[27,\"fa-icon\",[\"eye\"],[[\"prefix\"],[\"far\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"update\",[23,[\"character\"]]]],[9],[0,\"\\n        \"],[1,[27,\"fa-icon\",[\"edit\"],[[\"prefix\"],[\"fas\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"delete\",[23,[\"character\"]]]],[9],[0,\"\\n        \"],[1,[27,\"fa-icon\",[\"trash-alt\"],[[\"prefix\"],[\"far\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/character-list/list-item/template.hbs" } });
});
;define("tellersdesk-front/components/characters/character-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sIyZMmim", "block": "{\"symbols\":[\"character\"],\"statements\":[[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[10],[0,\"\\n        \"],[7,\"th\"],[11,\"colspan\",\"3\"],[9],[1,[27,\"t\",[\"label_attributes\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[1,[27,\"t\",[\"character.info.label.name\"],null],false],[10],[0,\"\\n        \"],[7,\"th\"],[9],[1,[27,\"t\",[\"character.attributes.label.physical\"],null],false],[10],[0,\"\\n        \"],[7,\"th\"],[9],[1,[27,\"t\",[\"character.attributes.label.social\"],null],false],[10],[0,\"\\n        \"],[7,\"th\"],[9],[1,[27,\"t\",[\"character.attributes.label.mental\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"characters\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"characters/character-list/list-item\",null,[[\"character\",\"onView\",\"onUpdate\",\"onDelete\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"itemView\"],null],[27,\"action\",[[22,0,[]],\"itemUpdate\"],null],[27,\"action\",[[22,0,[]],\"itemDelete\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/character-list/template.hbs" } });
});
;define('tellersdesk-front/components/characters/character-view/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        /**
         * @property character
         * @type {DS.Model}
         * @public
         */
        character: null,

        /**
         * @property onEdit
         * @type {Function}
         * @public
         */
        onEdit: null,

        /**
         * @property onCancel
         * @type {Function}
         * @public
         */
        onCancel: null,

        actions: {
            edit(character) {
                this.onEdit(character);
            },

            cancel() {
                this.onCancel();
            }
        }
    });
});
;define("tellersdesk-front/components/characters/character-view/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PJqlhC3U", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"characters/character-info-sheet\",null,[[\"character\",\"readOnly\"],[[23,[\"character\"]],true]]],false],[0,\"\\n\"],[1,[27,\"characters/character-attributes-sheet\",null,[[\"character\",\"readOnly\"],[[23,[\"character\"]],true]]],false],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"cancel\",[23,[\"character\"]]]],[9],[0,\"Cancel\"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"edit\",[23,[\"character\"]]]],[9],[0,\"Edit\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/character-view/template.hbs" } });
});
;define('tellersdesk-front/components/characters/characters-edit/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        /**
         * @property character
         * @type {DS.Model}
         * @public
         */
        character: null,

        /**
         * @property attributesMaxValues
         * @type {Number}
         * @public
         */
        attributesMaxValues: null,

        /**
         * @property
         * @type {Function}
         * @public
         */
        onSave: null,

        /**
         * @property
         * @type {Function}
         * @public
         */
        onCancel: null,

        /**
         * @inheritDoc
         */
        init() {
            this._super(...arguments);

            if (!this.get('character')) {
                throw new Error('A character model must be provided');
            }

            if (!this.get('attributesMaxValues')) {
                this.set('attributesMaxValues', [7, 5, 3]);
            }
        },

        validate() {
            if (this.get('character.isNew')) {
                this.validateNew();
            } else {
                this.validateExisting();
            }
        },

        validateNew() {
            const maxAllowed = this.get('attributesMaxValues').reduce((acc, val) => acc + val);

            if (this.get('character.attributesTotal') < maxAllowed) {
                throw new Error('Not all attribute points were used');
            }

            if (this.get('character.attributesTotal') > maxAllowed) {
                throw new Error('Maximum number of allowed attribute points were reached');
            }

            const attrMaxVals = this.get('attributesMaxValues').map(val => val);

            const physicalMaxIdx = attrMaxVals.indexOf(parseInt(this.get('character.physicalAttributesTotal')));
            if (physicalMaxIdx < 0) {
                throw new Error('Physical attributes points not distributed accordingly');
            }
            delete attrMaxVals[physicalMaxIdx];

            const socialMaxIdx = attrMaxVals.indexOf(parseInt(this.get('character.socialAttributesTotal')));
            if (socialMaxIdx < 0) {
                throw new Error('Social attributes points not distributed accordingly');
            }
            delete attrMaxVals[socialMaxIdx];

            const mentalMaxIdx = attrMaxVals.indexOf(parseInt(this.get('character.mentalAttributesTotal')));
            if (mentalMaxIdx < 0) {
                throw new Error('Mental attributes points not distributed accordingly');
            }
        },

        validateExisting() {},

        actions: {
            save(character) {
                this.validate();
                this.onSave(character);
            },

            cancel(character) {
                this.onCancel(character);
            }
        }
    });
});
;define("tellersdesk-front/components/characters/characters-edit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ba/mc2OJ", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"characters/character-info-sheet\",null,[[\"character\"],[[23,[\"character\"]]]]],false],[0,\"\\n\"],[1,[27,\"characters/character-attributes-sheet\",null,[[\"character\"],[[23,[\"character\"]]]]],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"character_edit--options\"],[9],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"save\",[23,[\"character\"]]]],[9],[0,\"Save\"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"cancel\",[23,[\"character\"]]]],[9],[0,\"Cancel\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/characters-edit/template.hbs" } });
});
;define('tellersdesk-front/components/fa-icon', ['exports', '@fortawesome/ember-fontawesome/components/fa-icon'], function (exports, _faIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
;define('tellersdesk-front/components/level-picker/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'span',

    /**
     * Minimum accepted value as level
     *
     * @property min
     * @type {Number}
     * @public
     */
    min: 0,

    /**
     * Maximum accepted value as level
     *
     * @property max
     * @type {Number}
     * @public
     */
    max: 5,

    /**
     * Current value for level
     *
     * @property currentValue
     * @type {Number}
     * @public
     */
    currentValue: 0,

    /**
     * If true, cannot be changed
     *
     * @property readOnly
     * @type {Boolean}
     * @public
     */
    readOnly: false,

    /**
     * Used to render the maximum number of level affordances
     *
     * @property levelsToRender
     * @type {Number}
     * @public
     */
    levelsToRender: Ember.computed('max', function () {
      const total = (Math.floor(this.get('max') / 5) + 1) * 5;
      return Ember.A(new Array(total).fill(0).map((value, index, array) => array[index] = index + 1));
    }),

    actions: {
      /**
       * Changes the current value of the level according to user interaction on the component
       * @param {Number} newVal
       * @param selected
       * @returns {boolean}
       */
      updateLevel(newVal, selected) {
        if (this.get('currentValue') === 1 && selected) {
          this.set('currentValue', 0);
        } else {
          this.set('currentValue', newVal);
        }

        // Prevent redirecting to the top of the page
        return false;
      }
    }
  });
});
;define('tellersdesk-front/components/level-picker/level-affordance/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: ''
    });
});
;define("tellersdesk-front/components/level-picker/level-affordance/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2U56prwA", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[27,\"gte\",[[23,[\"currentValue\"]],[23,[\"level\"]]],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"fa-icon\",[\"circle\"],[[\"prefix\"],[\"fas\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[27,\"fa-icon\",[\"circle\"],[[\"prefix\"],[\"far\"]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/level-picker/level-affordance/template.hbs" } });
});
;define("tellersdesk-front/components/level-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xF9C/P57", "block": "{\"symbols\":[\"level\"],\"statements\":[[4,\"each\",[[23,[\"levelsToRender\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"readOnly\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"level-picker/level-affordance\",null,[[\"currentValue\",\"level\"],[[23,[\"currentValue\"]],[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"style\",\"color: black; text-decoration: none;\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"updateLevel\",[22,1,[]],[27,\"gte\",[[23,[\"currentValue\"]],[22,1,[]]],null]],null]],[9],[0,\"\\n            \"],[1,[27,\"level-picker/level-affordance\",null,[[\"currentValue\",\"level\"],[[23,[\"currentValue\"]],[22,1,[]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/level-picker/template.hbs" } });
});
;define('tellersdesk-front/components/stories/story-list/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('tellersdesk-front/components/stories/story-list/list-item/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    /**
     * @inheritDoc
     */
    tagName: 'tr',

    /**
     * @property story
     * @type {DS.Model}
     * @public
     */
    story: null,

    /**
     * @property onView
     * @type {Function}
     * @public
     */
    onView: null,

    /**
     * @property onUpdate
     * @type {Function}
     * @public
     */
    onUpdate: null,

    /**
     * @property onDelete
     * @type {Function}
     * @public
     */
    onDelete: null,

    actions: {
      /**
       * @method view
       * @param {DS.Model} character
       */
      view(character) {
        this.onView(character);
      },

      /**
       * @method update
       * @param {DS.Model} character
       */
      update(character) {
        this.onUpdate(character);
      },

      /**
       * @method delete
       * @param {DS.Model} character
       */
      delete(character) {
        this.onDelete(character);
      }
    }
  });
});
;define("tellersdesk-front/components/stories/story-list/list-item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "x45yFF1M", "block": "{\"symbols\":[],\"statements\":[[7,\"td\"],[9],[1,[23,[\"story\",\"title\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[1,[23,[\"story\",\"summary\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"view\",[23,[\"character\"]]]],[9],[0,\"\\n        \"],[1,[27,\"fa-icon\",[\"eye\"],[[\"prefix\"],[\"far\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"update\",[23,[\"character\"]]]],[9],[0,\"\\n        \"],[1,[27,\"fa-icon\",[\"edit\"],[[\"prefix\"],[\"fas\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"delete\",[23,[\"character\"]]]],[9],[0,\"\\n        \"],[1,[27,\"fa-icon\",[\"trash-alt\"],[[\"prefix\"],[\"far\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/stories/story-list/list-item/template.hbs" } });
});
;define("tellersdesk-front/components/stories/story-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i+UCKLKf", "block": "{\"symbols\":[\"story\"],\"statements\":[[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[1,[27,\"t\",[\"story.title\"],null],false],[10],[0,\"\\n        \"],[7,\"th\"],[9],[1,[27,\"t\",[\"story.summary\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"stories\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"stories/story-list/list-item\",null,[[\"story\",\"onView\",\"onUpdate\",\"onDelete\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"itemView\"],null],[27,\"action\",[[22,0,[]],\"itemUpdate\"],null],[27,\"action\",[[22,0,[]],\"itemDelete\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/stories/story-list/template.hbs" } });
});
;define('tellersdesk-front/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('tellersdesk-front/controllers/characters/create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        actions: {
            async save(character) {
                try {
                    await character.save();
                    this.transitionToRoute('characters.list');
                } catch (err) {
                    character.rollbackAttributes();
                    alert(err);
                }
            },

            cancel(character) {
                character.deleteRecord();
                this.transitionToRoute('characters.list');
            }
        }

    });
});
;define('tellersdesk-front/controllers/characters/list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            /**
             * @method goToView
             * @param {DS.Model} character
             * @public
             */
            goToView(character) {
                this.transitionToRoute('characters.view', character.id);
            },

            /**
             * @method goToUpdate
             * @param {DS.Model} character
             * @public
             */
            goToUpdate(character) {
                this.transitionToRoute('characters.update', character.id);
            },

            /**
             * @method delete
             * @param {DS.Model} character
             * @async
             * @public
             */
            async delete(character) {
                character.destroyRecord();
            }
        }
    });
});
;define('tellersdesk-front/controllers/characters/update', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        actions: {
            async save(character) {
                try {
                    await character.save();
                    this.transitionToRoute('characters.list');
                } catch (err) {
                    character.rollbackAttributes();
                    alert(err);
                }
            },

            cancel(character) {
                character.rollbackAttributes();
                this.transitionToRoute('characters.list');
            }
        }

    });
});
;define('tellersdesk-front/controllers/characters/view', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        actions: {
            goToUpdate(character) {
                this.transitionToRoute('characters.update', character.id);
            },

            goToCancel() {
                this.transitionToRoute('characters.list');
            }
        }

    });
});
;define('tellersdesk-front/controllers/stories/list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            /**
             * @method goToView
             * @param {DS.Model} story
             * @public
             */
            goToView(story) {
                this.transitionToRoute('stories.view', story.id);
            },

            /**
             * @method goToUpdate
             * @param {DS.Model} story
             * @public
             */
            goToUpdate(story) {
                this.transitionToRoute('stories.update', story.id);
            },

            /**
             * @method delete
             * @param {DS.Model} story
             * @async
             * @public
             */
            async delete(story) {
                story.destroyRecord();
            }
        }
    });
});
;define('tellersdesk-front/formats', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        time: {
            hhmmss: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }
        },
        date: {
            hhmmss: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }
        },
        number: {
            EUR: {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            },
            USD: {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        }
    };
});
;define('tellersdesk-front/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define('tellersdesk-front/helpers/app-version', ['exports', 'tellersdesk-front/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('tellersdesk-front/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define('tellersdesk-front/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _formatDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});
;define('tellersdesk-front/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _formatMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
;define('tellersdesk-front/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _formatNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
;define('tellersdesk-front/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _formatRelative) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
;define('tellersdesk-front/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _formatTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
;define('tellersdesk-front/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define('tellersdesk-front/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define('tellersdesk-front/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define('tellersdesk-front/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define('tellersdesk-front/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define('tellersdesk-front/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define('tellersdesk-front/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define('tellersdesk-front/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define('tellersdesk-front/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define('tellersdesk-front/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define('tellersdesk-front/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('tellersdesk-front/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('tellersdesk-front/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _t) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
;define('tellersdesk-front/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define('tellersdesk-front/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tellersdesk-front/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('tellersdesk-front/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('tellersdesk-front/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('tellersdesk-front/initializers/export-application-global', ['exports', 'tellersdesk-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("tellersdesk-front/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('tellersdesk-front/instance-initializers/ember-intl', ['exports', 'ember-intl/initializer'], function (exports, _initializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.instanceInitializer = undefined;
  exports.instanceInitializer = _initializer.instanceInitializer;
  exports.default = _initializer.default;
});
;define('tellersdesk-front/models/character', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const physicalAttributes = ['strength', 'dexterity', 'stamina'];
  const socialAttributes = ['charisma', 'manipulation', 'appearance'];
  const mentalAttributes = ['perception', 'intelligence', 'wits'];
  const attributesSet = ['physicalAttributesTotal', 'socialAttributesTotal', 'mentalAttributesTotal'];

  /**
   * @function sumAttributes
   * @param {Array<String>} attributes
   * @returns Number
   */
  const sumAttributes = function (attributes) {
    return attributes.map(attr => parseInt(this.get(attr))).reduce((acc, curr) => acc + curr);
  };

  exports.default = _emberData.default.Model.extend({
    /**
     * @property name
     * @type {String}
     * @public
     */
    name: _emberData.default.attr('string'),

    /**
     * @property strength
     * @type {Number}
     * @public
     */
    strength: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property dexterity
     * @type {Number}
     * @public
     */
    dexterity: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property stamina
     * @type {Number}
     * @public
     */
    stamina: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property charisma
     * @type {Number}
     * @public
     */
    charisma: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property manipulation
     * @type {Number}
     * @public
     */
    manipulation: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property appearance
     * @type {Number}
     * @public
     */
    appearance: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property perception
     * @type {Number}
     * @public
     */
    perception: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property intelligence
     * @type {Number}
     * @public
     */
    intelligence: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property wits
     * @type {Number}
     * @public
     */
    wits: _emberData.default.attr('number', { defaultValue: 1 }),

    /**
     * @property story
     * @type {DS.Model}
     * @public
     */
    story: _emberData.default.belongsTo('story'),

    /**
     * @property isNpc
     * @type {Boolean}
     * @public
     */
    isNpc: _emberData.default.attr('boolean', { defaultValue: false }),

    /**
     * @property maxAttributeLevel
     * @type {Number}
     * @readonly
     * @public
     */
    maxAttributeLevel: Ember.computed(...physicalAttributes, ...socialAttributes, ...mentalAttributes, function () {
      return [...physicalAttributes, ...socialAttributes, ...mentalAttributes].map(attr => parseInt(this.get(attr))).reduce((greatest, curr) => curr > greatest ? curr : greatest);
    }),

    /**
     * @property physicalAttributesTotal
     * @type {Number}
     * @readonly
     * @public
     */
    physicalAttributesTotal: Ember.computed(...physicalAttributes, function () {
      return sumAttributes.bind(this)(physicalAttributes);
    }),

    /**
     * @property socialAttributesTotal
     * @type {Number}
     * @readonly
     * @public
     */
    socialAttributesTotal: Ember.computed(...socialAttributes, function () {
      return sumAttributes.bind(this)(socialAttributes);
    }),

    /**
     * @property mentalAttributesTotal
     * @type {Number}
     * @readonly
     * @public
     */
    mentalAttributesTotal: Ember.computed(...mentalAttributes, function () {
      return sumAttributes.bind(this)(mentalAttributes);
    }),

    /**
     * @property attributesTotal
     * @type {Number}
     * @readonly
     * @public
     */
    attributesTotal: Ember.computed(...attributesSet, function () {
      return sumAttributes.bind(this)(attributesSet);
    })
  });
});
;define('tellersdesk-front/models/story', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    /**
     * @property name
     * @type {String}
     * @public
     */
    title: _emberData.default.attr('string'),

    /**
     * @property summary
     * @type {String}
     * @public
     */
    summary: _emberData.default.attr('string')
  });
});
;define('tellersdesk-front/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('tellersdesk-front/router', ['exports', 'tellersdesk-front/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const Router = Ember.Router.extend({
        location: _environment.default.locationType,
        rootURL: _environment.default.rootURL
    });

    Router.map(function () {
        this.route('characters', function () {
            this.route('create');
            this.route('list');
            this.route('update', { path: '/:id/update' });
            this.route('view', { path: '/:id' });
        });
        this.route('stories', function () {
            this.route('list');
        });
        this.route('dashboards');
    });

    exports.default = Router;
});
;define('tellersdesk-front/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('tellersdesk-front/routes/characters', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('tellersdesk-front/routes/characters/create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        model() {
            return this.store.createRecord('character');
        }

    });
});
;define('tellersdesk-front/routes/characters/list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        /**
         * @inheritDoc
         */
        model() {
            return this.store.findAll('character');
        }
    });
});
;define('tellersdesk-front/routes/characters/update', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        model(params) {
            return this.store.findRecord('character', params.id);
        }

    });
});
;define('tellersdesk-front/routes/characters/view', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        model(params) {
            return this.store.findRecord('character', params.id);
        }

    });
});
;define('tellersdesk-front/routes/dashboards', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('tellersdesk-front/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('tellersdesk-front/routes/stories/list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        /**
         * @inheritDoc
         */
        model() {
            return this.store.findAll('story');
        }
    });
});
;define('tellersdesk-front/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('tellersdesk-front/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _intl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});
;define("tellersdesk-front/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SCGLLT9x", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Application\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/application.hbs" } });
});
;define("tellersdesk-front/templates/characters", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9ciBYx9+", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Characters\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters.hbs" } });
});
;define("tellersdesk-front/templates/characters/create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M/iauR+C", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Create\"],[10],[0,\"\\n\"],[1,[27,\"characters/characters-edit\",null,[[\"character\",\"onSave\",\"onCancel\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters/create.hbs" } });
});
;define("tellersdesk-front/templates/characters/list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SKpRnGoC", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"List\"],[10],[0,\"\\n\"],[1,[27,\"characters/character-list\",null,[[\"characters\",\"onItemView\",\"onItemUpdate\",\"onItemDelete\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"goToView\"],null],[27,\"action\",[[22,0,[]],\"goToUpdate\"],null],[27,\"action\",[[22,0,[]],\"delete\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters/list.hbs" } });
});
;define("tellersdesk-front/templates/characters/update", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/I6vv1ZB", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Update\"],[10],[0,\"\\n\"],[1,[27,\"characters/characters-edit\",null,[[\"character\",\"onSave\",\"onCancel\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters/update.hbs" } });
});
;define("tellersdesk-front/templates/characters/view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BCmQGrv2", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"View\"],[10],[0,\"\\n\"],[1,[27,\"characters/character-view\",null,[[\"character\",\"onEdit\",\"onCancel\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"goToUpdate\"],null],[27,\"action\",[[22,0,[]],\"goToCancel\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters/view.hbs" } });
});
;define("tellersdesk-front/templates/dashboards", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "grOc6j0T", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Dashboard\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/dashboards.hbs" } });
});
;define("tellersdesk-front/templates/stories/list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i8C7yxxd", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"List\"],[10],[0,\"\\n\"],[1,[27,\"stories/story-list\",null,[[\"stories\",\"onItemView\",\"onItemUpdate\",\"onItemDelete\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"goToView\"],null],[27,\"action\",[[22,0,[]],\"goToUpdate\"],null],[27,\"action\",[[22,0,[]],\"delete\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/stories/list.hbs" } });
});
;define("tellersdesk-front/translations/en-us", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = { "character": { "attributes": { "label": { "appearance": "Appearance", "charisma": "Charisma", "dexterity": "Dexterity", "intelligence": "Intelligence", "manipulation": "Manipulation", "mental": "Mental", "perception": "Perception", "physical": "Physical", "social": "Social", "stamina": "Stamina", "strength": "Strength", "wits": "Wits" } }, "info": { "label": { "age": "Age", "gender": "Gender", "name": "Name" } } }, "label_attributes": "Attributes", "story": { "summary": "Summary", "title": "Title" } };
});
;define('tellersdesk-front/utils/intl/missing-message', ['exports', 'ember-intl/utils/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
;

;define('tellersdesk-front/config/environment', [], function() {
  var prefix = 'tellersdesk-front';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("tellersdesk-front/app")["default"].create({"name":"tellersdesk-front","version":"0.0.0+2c477faf"});
          }
        
//# sourceMappingURL=tellersdesk-front.map
