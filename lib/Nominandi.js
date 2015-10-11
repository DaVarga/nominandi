/**
 * A name generator for unique names
 * @module Nominandi
 * @license MIT License
 */

"use strict";
{
    //privates
    const _used = new WeakMap();
    const _fragments = new WeakMap();
    const _max = new WeakMap();
    const _types = new WeakMap();

    //private function
    const _getRandom = new WeakMap();


    /**
     * Nominandi class.
     * @class Nominandi
     */
    class Nominandi {
        /**
         * Nominandi constructor.
         * @constructs Nominandi
         */
        constructor() {

            //initializing privates
            _used.set(this, new Set());

            _fragments.set(this, [
                ["A", "Ae", "Au", "E", "O"],
                ["B", "Br", "C", "Cl", "Cr", "D", "Dr", "F", "Fl", "G", "Gl", "Gr", "H", "J", "L", "M", "N", "P", "Qu", "R", "S", "Sp", "T", "V"],
                ["a", "ae", "au", "e", "i", "ia", "io", "o", "oe"],
                ["b", "bl", "br", "c", "cr", "ct", "d", "dr", "g", "gn", "gr", "l", "lb", "lf", "ll", "lv", "m", "n", "nd", "ng", "nl", "nn", "nt", "p", "pr", "pt", "qu", "r", "rb", "rc", "rg", "rm", "rn", "rt", "rv", "s", "sc", "sp", "ss", "st", "t", "tr", "v", "x", "xt"],
                ["a", "o"],
                ["aia", "aius", "eius", "ia", "ian", "ius", "ix", "us"]
            ]);

            _types.set(this, [
                [1, 5],
                [0, 3, 5],
                [0, 3, 4],
                [1, 2, 3, 5],
                [1, 2, 3, 4],
                [0, 3, 2, 3, 5],
                [0, 3, 2, 3, 4]
            ]);

            _used.set(this, new Set());

            _getRandom.set(this, function (arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            });

            //calculating maximum combinations
            let summax = 0;
            for (let nameTyp of _types.get(this)) {
                let typmax = 1;
                for (let fragTyp of nameTyp) {
                    typmax *= _fragments.get(this)[fragTyp].length;
                }
                summax += typmax;
            }
            _max.set(this,summax);


        }

        /**
         * generate a name
         * @returns {string}
         */
        generate() {
            //get the privates for better readability
            let getRan = _getRandom.get(this);
            let types = _types.get(this);
            let fragments = _fragments.get(this);
            let used = _used.get(this);
            let max = _max.get(this);

            let buffer = "";

            do {
                //create buffer
                buffer = "";
                //get random name typ
                for (let fragTyp of getRan(types)) {
                    //add random fragments to buffer
                    buffer += getRan(fragments[fragTyp]);
                }
            } while (used.has(buffer));
            //name is not blacklisted
            used.add(buffer);
            if (used.size == max) {
                used.clear();
            }
            return buffer;
        }

        /**
         * reset used lists
         */
        reset(){
            let used = _used.get(this);
            used.clear();
        }

        /**
         * amount of unique names
         * @returns {int}
         */
        names(){
            let max = _max.get(this);
            return max;
        }



    }
    module.exports = Nominandi;
}