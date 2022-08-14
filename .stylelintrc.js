module.exports = {
    "ignoreFiles": ["**/*.js", "**/*.html"],
    extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
    plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
    customSyntax: require("postcss-scss"),
    rules: {
        'plugin/declaration-block-no-ignored-properties': true,
        'declaration-no-important': true,
        'no-empty-first-line': true,
        'no-extra-semicolons': true,
        'length-zero-no-unit': true,
        'no-duplicate-at-import-rules': true,
        'no-invalid-double-slash-comments': true,
        'shorthand-property-no-redundant-values': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-redundant-longhand-properties': [
            true, { ignoreShorthands: ['/background/'] }
        ],
        'string-quotes': 'single',
        'number-leading-zero': 'always',
        'max-line-length': [
            120, { ignore: ['comments'] }
        ],
        'selector-max-empty-lines': 0,
        'max-empty-lines': 1,
        'number-max-precision': 3,

        'font-family-name-quotes': 'always-unless-keyword',
        'color-hex-length': 'short',
        'color-function-notation': 'legacy',

        'at-rule-semicolon-space-before': 'never',

        "declaration-empty-line-before": null,

        "rule-empty-line-before": [
            "always",
            {
                "except": ["first-nested"],
                "ignore": ["after-comment"]
            }
        ],

        "at-rule-empty-line-before": [
            "always",
            {
                "except": ["first-nested"],
                "ignore": ["after-comment"]
            }
        ],
        // property-sort-order-smacss
        'order/properties-alphabetical-order': null,
        'order/properties-order': [
            [
                {
                    groupName: 'Heading',
                    emptyLineBefore: 'always',
                    properties: ['content', 'quotes'],
                },
                {
                    groupName: 'Box',
                    emptyLineBefore: 'always',
                    properties: [
                        'display',
                        'visibility',
                        'position',
                        'z-index',
                        'top',
                        'right',
                        'bottom',
                        'left',
                        'box-sizing',
                        'grid',
                        'grid-after',
                        'grid-area',
                        'grid-auto-columns',
                        'grid-auto-flow',
                        'grid-auto-rows',
                        'grid-before',
                        'grid-column',
                        'grid-column-end',
                        'grid-column-gap',
                        'grid-column-start',
                        'grid-columns',
                        'grid-end',
                        'grid-gap',
                        'grid-row',
                        'grid-row-end',
                        'grid-row-gap',
                        'grid-row-start',
                        'grid-rows',
                        'grid-start',
                        'grid-template',
                        'grid-template-areas',
                        'grid-template-columns',
                        'grid-template-rows',
                        'flex',
                        'flex-basis',
                        'flex-direction',
                        'flex-flow',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',
                        'align-content',
                        'align-items',
                        'align-self',
                        'justify-content',
                        'order',
                        'width',
                        'min-width',
                        'max-width',
                        'height',
                        'min-height',
                        'max-height',
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left',
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',
                        'float',
                        'clear',
                        'overflow',
                        'overflow-x',
                        'overflow-y',
                        'clip',
                        'zoom',
                        'columns',
                        'column-gap',
                        'column-fill',
                        'column-rule',
                        'column-span',
                        'column-count',
                        'column-width',
                        'table-layout',
                        'empty-cells',
                        'caption-side',
                        'border-spacing',
                        'border-collapse',
                        'list-style',
                        'list-style-position',
                        'list-style-type',
                        'list-style-image',
                    ],
                },
                {
                    groupName: 'Animation',
                    emptyLineBefore: 'always',
                    properties: [
                        'transform',
                        'transform-origin',
                        'transform-style',
                        'backface-visibility',
                        'perspective',
                        'perspective-origin',
                        'transition',
                        'transition-property',
                        'transition-duration',
                        'transition-timing-function',
                        'transition-delay',
                        'animation',
                        'animation-name',
                        'animation-duration',
                        'animation-play-state',
                        'animation-timing-function',
                        'animation-delay',
                        'animation-iteration-count',
                        'animation-direction',
                    ],
                },
                {
                    groupName: 'Border',
                    emptyLineBefore: 'always',
                    properties: [
                        'border',
                        'border-top',
                        'border-right',
                        'border-bottom',
                        'border-left',
                        'border-width',
                        'border-top-width',
                        'border-right-width',
                        'border-bottom-width',
                        'border-left-width',
                        'border-style',
                        'border-top-style',
                        'border-right-style',
                        'border-bottom-style',
                        'border-left-style',
                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-left-radius',
                        'border-bottom-right-radius',
                        'border-color',
                        'border-top-color',
                        'border-right-color',
                        'border-bottom-color',
                        'border-left-color',
                        'outline',
                        'outline-color',
                        'outline-offset',
                        'outline-style',
                        'outline-width',
                        'stroke-width',
                        'stroke-linecap',
                        'stroke-dasharray',
                        'stroke-dashoffset',
                        'stroke',
                    ],
                },
                {
                    groupName: 'Background',
                    emptyLineBefore: 'always',
                    properties: [
                        'opacity',
                        'background',
                        'background-color',
                        'background-image',
                        'background-repeat',
                        'background-position',
                        'background-size',
                        'box-shadow',
                        'fill',
                    ],
                },
                {
                    groupName: 'Text',
                    emptyLineBefore: 'always',
                    properties: [
                        'color',
                        'font',
                        'font-family',
                        'font-size',
                        'font-size-adjust',
                        'font-stretch',
                        'font-effect',
                        'font-style',
                        'font-variant',
                        'font-weight',
                        'font-emphasize',
                        'font-emphasize-position',
                        'font-emphasize-style',
                        'letter-spacing',
                        'line-height',
                        'list-style',
                        'word-spacing',
                        'text-align',
                        'text-align-last',
                        'text-decoration',
                        'text-indent',
                        'text-justify',
                        'text-overflow',
                        'text-overflow-ellipsis',
                        'text-overflow-mode',
                        'text-rendering',
                        'text-outline',
                        'text-shadow',
                        'text-transform',
                        'text-wrap',
                        'word-wrap',
                        'word-break',
                        'text-emphasis',
                        'text-emphasis-color',
                        'text-emphasis-style',
                        'text-emphasis-position',
                        'vertical-align',
                        'white-space',
                        'word-spacing',
                        'hyphens',
                        'src',
                    ],
                },
                {
                    groupName: 'Other',
                    emptyLineBefore: 'always',
                    properties: [
                        'tab-size',
                        'counter-reset',
                        'counter-increment',
                        'resize',
                        'cursor',
                        'pointer-events',
                        'speak',
                        'user-select',
                        'nav-index',
                        'nav-up',
                        'nav-right',
                        'nav-down',
                        'nav-left',
                    ],
                },
            ],
            {
                unspecified: 'bottom',
                emptyLineBeforeUnspecified: 'always',
            },
        ],
    },
};
