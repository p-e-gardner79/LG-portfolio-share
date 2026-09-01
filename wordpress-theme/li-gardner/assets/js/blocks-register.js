(function (wp) {
  if (!wp || !wp.blocks || !wp.element || !wp.blockEditor) return;

  var registerBlockType = wp.blocks.registerBlockType;
  var createElement = wp.element.createElement;
  var RichText = wp.blockEditor.RichText;
  var InspectorControls = wp.blockEditor.InspectorControls;
  var PanelBody = wp.components.PanelBody;
  var TextControl = wp.components.TextControl;
  var SelectControl = wp.components.SelectControl;
  var Button = wp.components.Button;

  var BRAND_PRESETS = [
    { label: '— Select Brand Preset —', value: '' },
    { label: 'Gov UK (British Bold Sans)', value: 'govuk', text: 'Gov UK', styleClass: 'logo-government' },
    { label: 'NHS (Medical Condensed Italic)', value: 'nhs', text: 'NHS', styleClass: 'logo-nhs' },
    { label: 'HSBC (Corporate Serif / Sans)', value: 'hsbc', text: 'HSBC', styleClass: 'logo-hsbc' },
    { label: 'BlackRock (Geometric Sans)', value: 'blackrock', text: 'BlackRock', styleClass: 'logo-blackrock' },
    { label: 'Royal Mail (Classic Serif)', value: 'royalmail', text: 'Royal Mail', styleClass: 'logo-royalmail' },
    { label: 'AXA (Heavy Display Sans)', value: 'axa', text: 'AXA', styleClass: 'logo-axa' },
    { label: 'Royal Pharmaceutical Society (Editorial Serif)', value: 'rps', text: 'Royal Pharmaceutical\nSociety', styleClass: 'logo-rps' },
    { label: 'Regeneron (Modern Bold Sans)', value: 'regeneron', text: 'Regeneron', styleClass: 'logo-regeneron' },
    { label: 'Co-op (Geometric Bold Sans)', value: 'coop', text: 'Co-op', styleClass: 'logo-coop' },
    { label: 'amway (Lowercase Italic Sans)', value: 'amway', text: 'amway', styleClass: 'logo-amway' },
    { label: 'THOMSON REUTERS (All-Caps Spaced)', value: 'reuters', text: 'THOMSON REUTERS', styleClass: 'logo-reuters' },
    { label: 'Microsoft (Segoe Clean Sans)', value: 'microsoft', text: 'Microsoft', styleClass: 'logo-microsoft' },
    { label: 'EA (Monogram Circle Badge)', value: 'ea', text: 'EA', styleClass: 'logo-ea-cell' },
    { label: 'NatWest (Modern Banking Sans)', value: 'natwest', text: 'NatWest', styleClass: 'logo-natwest' },
    { label: 'Custom: Bold Modern Sans', value: 'custom_sans_bold', text: 'Brand Name', styleClass: 'style-sans-bold' },
    { label: 'Custom: Clean Sans', value: 'custom_sans_clean', text: 'Brand Name', styleClass: 'style-sans-clean' },
    { label: 'Custom: Editorial Serif', value: 'custom_serif_editorial', text: 'Brand Name', styleClass: 'style-serif-editorial' },
    { label: 'Custom: Classic Times Serif', value: 'custom_serif_classic', text: 'Brand Name', styleClass: 'style-serif-classic' },
    { label: 'Custom: Heavy Italic Sans', value: 'custom_italic_heavy', text: 'Brand Name', styleClass: 'style-italic-heavy' },
    { label: 'Custom: All-Caps Spaced', value: 'custom_allcaps_spaced', text: 'BRAND NAME', styleClass: 'style-allcaps-spaced' },
    { label: 'Custom: Circle Monogram Badge', value: 'custom_badge_circle', text: 'AB', styleClass: 'style-badge-circle' },
    { label: 'Custom: Lowercase Bold', value: 'custom_lowercase_bold', text: 'brand', styleClass: 'style-lowercase-bold' }
  ];

  var FONT_STYLE_OPTIONS = [
    { label: 'Gov UK Bold Sans', value: 'logo-government' },
    { label: 'NHS Condensed Heavy Italic', value: 'logo-nhs' },
    { label: 'HSBC Banking Sans', value: 'logo-hsbc' },
    { label: 'BlackRock Geometric Sans', value: 'logo-blackrock' },
    { label: 'Royal Mail Serif', value: 'logo-royalmail' },
    { label: 'AXA Heavy Display', value: 'logo-axa' },
    { label: 'Editorial Serif (RPS)', value: 'logo-rps' },
    { label: 'Regeneron Bold Sans', value: 'logo-regeneron' },
    { label: 'Co-op Rounded Bold Sans', value: 'logo-coop' },
    { label: 'amway Lowercase Italic', value: 'logo-amway' },
    { label: 'Thomson Reuters Spaced', value: 'logo-reuters' },
    { label: 'Microsoft Clean Sans', value: 'logo-microsoft' },
    { label: 'EA Circular Badge', value: 'logo-ea-cell' },
    { label: 'NatWest Bold Sans', value: 'logo-natwest' },
    { label: 'Custom: Bold Modern Sans', value: 'style-sans-bold' },
    { label: 'Custom: Clean Sans', value: 'style-sans-clean' },
    { label: 'Custom: Editorial Serif', value: 'style-serif-editorial' },
    { label: 'Custom: Classic Times Serif', value: 'style-serif-classic' },
    { label: 'Custom: Heavy Italic Sans', value: 'style-italic-heavy' },
    { label: 'Custom: All-Caps Spaced', value: 'style-allcaps-spaced' },
    { label: 'Custom: Circle Monogram Badge', value: 'style-badge-circle' },
    { label: 'Custom: Lowercase Bold', value: 'style-lowercase-bold' }
  ];

  var DEFAULT_LOGOS = [
    { id: '1', text: 'Gov UK', styleClass: 'logo-government' },
    { id: '2', text: 'NHS', styleClass: 'logo-nhs' },
    { id: '3', text: 'HSBC', styleClass: 'logo-hsbc' },
    { id: '4', text: 'BlackRock', styleClass: 'logo-blackrock' },
    { id: '5', text: 'Royal Mail', styleClass: 'logo-royalmail' },
    { id: '6', text: 'AXA', styleClass: 'logo-axa' },
    { id: '7', text: 'Royal Pharmaceutical\nSociety', styleClass: 'logo-rps' },
    { id: '8', text: 'Regeneron', styleClass: 'logo-regeneron' },
    { id: '9', text: 'Co-op', styleClass: 'logo-coop' },
    { id: '10', text: 'amway', styleClass: 'logo-amway' },
    { id: '11', text: 'THOMSON REUTERS', styleClass: 'logo-reuters' },
    { id: '12', text: 'Microsoft', styleClass: 'logo-microsoft' },
    { id: '13', text: 'EA', styleClass: 'logo-ea-cell' },
    { id: '14', text: 'NatWest', styleClass: 'logo-natwest' }
  ];

  /* ==========================================================================
     1. HERO BLOCK (li-gardner/hero)
     ========================================================================== */
  registerBlockType('li-gardner/hero', {
    title: 'Hero & System Network',
    icon: 'superhero-alt',
    category: 'li-gardner',
    attributes: {
      line1: { type: 'string', default: 'Connect what exists.' },
      line2: { type: 'string', default: 'Change what matters.' },
      line3: { type: 'string', default: 'Deliver what works.' },
      intro: { type: 'string', default: 'User-centred strategy and design for products, platforms and services—with the change needed for adoption to stick.' },
      ctaText: { type: 'string', default: "Let's talk" },
      ctaLink: { type: 'string', default: '#contact' },
      locations: { type: 'string', default: 'Worked locations: London · Manchester · Edinburgh · New York · San Francisco · Singapore · Shanghai · Hong Kong · Zurich' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('div', { className: 'hero-block-wrapper' },
        createElement(InspectorControls, null,
          createElement(PanelBody, { title: 'Hero Button & Link Settings', initialOpen: true },
            createElement(TextControl, {
              label: 'CTA Link Target',
              value: attr.ctaLink,
              onChange: function (val) { setAttr({ ctaLink: val }); }
            })
          )
        ),
        createElement('section', { className: 'hero', id: 'top' },
          createElement('div', { className: 'hero-ambient-glow', ariaHidden: 'true' }),
          createElement('div', { className: 'hero-grid shell' },
            createElement('div', { className: 'hero-copy' },
              createElement('h1', null,
                createElement(RichText, {
                  tagName: 'span',
                  value: attr.line1,
                  onChange: function (val) { setAttr({ line1: val }); },
                  placeholder: 'Line 1...'
                }),
                createElement('br'),
                createElement(RichText, {
                  tagName: 'span',
                  value: attr.line2,
                  onChange: function (val) { setAttr({ line2: val }); },
                  placeholder: 'Line 2...'
                }),
                createElement('br'),
                createElement(RichText, {
                  tagName: 'span',
                  className: 'highlight',
                  value: attr.line3,
                  onChange: function (val) { setAttr({ line3: val }); },
                  placeholder: 'Line 3 highlight...'
                })
              ),
              createElement(RichText, {
                tagName: 'p',
                className: 'hero-intro',
                value: attr.intro,
                onChange: function (val) { setAttr({ intro: val }); },
                placeholder: 'Hero introduction copy...'
              }),
              createElement('div', { className: 'hero-actions' },
                createElement('div', { className: 'consultation-cta' },
                  createElement(RichText, {
                    tagName: 'span',
                    value: attr.ctaText,
                    onChange: function (val) { setAttr({ ctaText: val }); },
                    placeholder: 'Button text...'
                  }),
                  createElement('svg', { viewBox: '0 0 24 24', className: 'arrow-icon diagonal', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' },
                    createElement('path', { d: 'M5 12h14M14 7l5 5-5 5' })
                  )
                )
              )
            ),
            createElement(RichText, {
              tagName: 'p',
              className: 'hero-footer',
              value: attr.locations,
              onChange: function (val) { setAttr({ locations: val }); },
              placeholder: 'Worked locations list...'
            }),
            createElement('div', { className: 'leverage-card' },
              createElement('div', { className: 'orbit' },
                createElement('svg', { className: 'network-visual', viewBox: '0 0 380 380' },
                  createElement('defs', null,
                    createElement('radialGradient', { id: 'ed-effect', cx: '50%', cy: '50%', r: '50%' },
                      createElement('stop', { offset: '0%', stopColor: '#ff765e', stopOpacity: '0.24' }),
                      createElement('stop', { offset: '100%', stopColor: '#ff765e', stopOpacity: '0' })
                    )
                  ),
                  createElement('circle', { className: 'system-field', cx: '190', cy: '190', r: '184', fill: 'url(#ed-effect)' }),
                  createElement('circle', { className: 'ecosystem-ring outer', cx: '190', cy: '190', r: '146' }),
                  createElement('circle', { className: 'ecosystem-ring inner', cx: '190', cy: '190', r: '99' }),
                  createElement('g', { className: 'network-lines', stroke: 'rgba(255,118,94,0.5)' },
                    createElement('path', { d: 'M190 190L190 53M190 190L311 119M190 190L311 259M190 190L190 327M190 190L69 259M190 190L69 119' }),
                    createElement('path', { className: 'secondary-link', d: 'M190 53L311 119L311 259L190 327L69 259L69 119Z' })
                  ),
                  createElement('g', { className: 'network-node' },
                    createElement('circle', { cx: '190', cy: '53', r: '31' }),
                    createElement('text', { x: '190', y: '57' }, 'BUSINESS')
                  ),
                  createElement('g', { className: 'network-node' },
                    createElement('circle', { cx: '311', cy: '119', r: '31' }),
                    createElement('text', { x: '311', y: '123' }, 'TECHNOLOGY')
                  ),
                  createElement('g', { className: 'network-node' },
                    createElement('circle', { cx: '311', cy: '259', r: '31' }),
                    createElement('text', { x: '311', y: '263' }, 'DATA & AI')
                  ),
                  createElement('g', { className: 'network-node' },
                    createElement('circle', { cx: '190', cy: '327', r: '31' }),
                    createElement('text', { x: '190', y: '331' }, 'PEOPLE')
                  ),
                  createElement('g', { className: 'network-node' },
                    createElement('circle', { cx: '69', cy: '259', r: '31' }),
                    createElement('text', { x: '69', y: '263' }, 'CUSTOMER')
                  ),
                  createElement('g', { className: 'network-node' },
                    createElement('circle', { cx: '69', cy: '119', r: '31' }),
                    createElement('text', { x: '69', y: '123' }, 'DELIVERY')
                  ),
                  createElement('g', { className: 'focus-node' },
                    createElement('circle', { className: 'focus-halo', cx: '190', cy: '190', r: '30' }),
                    createElement('circle', { cx: '190', cy: '190', r: '19' }),
                    createElement('text', { x: '190', y: '191' }, 'LEVERAGE POINT')
                  )
                )
              )
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'hero', id: 'top' },
        createElement('div', { className: 'hero-ambient-glow', id: 'hero-glow', ariaHidden: 'true' }),
        createElement('div', { className: 'hero-grid shell' },
          createElement('div', { className: 'hero-copy reveal' },
            createElement('h1', { id: 'hero-heading' },
              createElement(RichText.Content, { tagName: 'span', value: attr.line1 }),
              createElement('br'),
              createElement(RichText.Content, { tagName: 'span', value: attr.line2 }),
              createElement('br'),
              createElement(RichText.Content, { tagName: 'span', className: 'highlight', value: attr.line3 })
            ),
            createElement(RichText.Content, { tagName: 'p', className: 'hero-intro', value: attr.intro }),
            createElement('div', { className: 'hero-actions' },
              createElement('a', { className: 'consultation-cta', href: attr.ctaLink, id: 'hero-cta-btn' },
                createElement(RichText.Content, { tagName: 'span', value: attr.ctaText }),
                createElement('svg', { ariaHidden: 'true', viewBox: '0 0 24 24', className: 'arrow-icon diagonal', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' },
                  createElement('path', { d: 'M5 12h14M14 7l5 5-5 5' })
                )
              )
            )
          ),
          createElement(RichText.Content, { tagName: 'p', className: 'hero-footer', value: attr.locations }),
          createElement('div', { className: 'leverage-card', id: 'leverage-card', ariaLabel: 'System Leverage Point interactive network visual' },
            createElement('div', { className: 'orbit', id: 'leverage-orbit', ariaHidden: 'true' },
              createElement('svg', { className: 'network-visual', viewBox: '0 0 380 380', role: 'presentation' },
                createElement('defs', null,
                  createElement('radialGradient', { id: 'system-effect', cx: '50%', cy: '50%', r: '50%' },
                    createElement('stop', { offset: '0%', stopColor: '#ff765e', stopOpacity: '0.24' }),
                    createElement('stop', { offset: '32%', stopColor: '#ff765e', stopOpacity: '0.12' }),
                    createElement('stop', { offset: '68%', stopColor: '#ff765e', stopOpacity: '0.045' }),
                    createElement('stop', { offset: '100%', stopColor: '#ff765e', stopOpacity: '0' })
                  ),
                  createElement('linearGradient', { id: 'network-line', x1: '0', y1: '0', x2: '1', y2: '1' },
                    createElement('stop', { offset: '0%', stopColor: '#ffffff', stopOpacity: '0.16' }),
                    createElement('stop', { offset: '50%', stopColor: '#ff765e', stopOpacity: '0.58' }),
                    createElement('stop', { offset: '100%', stopColor: '#ffffff', stopOpacity: '0.16' })
                  )
                ),
                createElement('circle', { className: 'system-field', cx: '190', cy: '190', r: '184', fill: 'url(#system-effect)' }),
                createElement('circle', { className: 'ecosystem-ring outer', cx: '190', cy: '190', r: '146' }),
                createElement('circle', { className: 'ecosystem-ring inner', cx: '190', cy: '190', r: '99' }),
                createElement('g', { className: 'network-lines', stroke: 'url(#network-line)' },
                  createElement('path', { d: 'M190 190L190 53M190 190L311 119M190 190L311 259M190 190L190 327M190 190L69 259M190 190L69 119' }),
                  createElement('path', { className: 'secondary-link', d: 'M190 53L311 119L311 259L190 327L69 259L69 119Z' }),
                  createElement('path', { className: 'secondary-link', d: 'M190 53L69 259M311 119L190 327M311 259L69 119' })
                ),
                createElement('g', { className: 'synapses' },
                  createElement('circle', { cx: '190', cy: '119', r: '3' }),
                  createElement('circle', { cx: '251', cy: '154', r: '2.5' }),
                  createElement('circle', { cx: '252', cy: '226', r: '3' }),
                  createElement('circle', { cx: '190', cy: '258', r: '2.5' }),
                  createElement('circle', { cx: '128', cy: '226', r: '3' }),
                  createElement('circle', { cx: '128', cy: '154', r: '2.5' }),
                  createElement('circle', { cx: '250', cy: '86', r: '2' }),
                  createElement('circle', { cx: '311', cy: '189', r: '2' }),
                  createElement('circle', { cx: '250', cy: '293', r: '2' }),
                  createElement('circle', { cx: '129', cy: '293', r: '2' }),
                  createElement('circle', { cx: '69', cy: '189', r: '2' }),
                  createElement('circle', { cx: '129', cy: '86', r: '2' })
                ),
                createElement('g', { className: 'network-node', 'data-node': 'business' },
                  createElement('circle', { cx: '190', cy: '53', r: '31' }),
                  createElement('text', { x: '190', y: '57', 'data-i18n': 'nodeBusiness' }, 'BUSINESS')
                ),
                createElement('g', { className: 'network-node', 'data-node': 'technology' },
                  createElement('circle', { cx: '311', cy: '119', r: '31' }),
                  createElement('text', { x: '311', y: '123', 'data-i18n': 'nodeTechnology' }, 'TECHNOLOGY')
                ),
                createElement('g', { className: 'network-node', 'data-node': 'data-ai' },
                  createElement('circle', { cx: '311', cy: '259', r: '31' }),
                  createElement('text', { x: '311', y: '256' },
                    createElement('tspan', { x: '311', 'data-i18n': 'nodeData' }, 'DATA'),
                    createElement('tspan', { x: '311', dy: '11', 'data-i18n': 'nodeAI' }, '& AI')
                  )
                ),
                createElement('g', { className: 'network-node', 'data-node': 'people' },
                  createElement('circle', { cx: '190', cy: '327', r: '31' }),
                  createElement('text', { x: '190', y: '331', 'data-i18n': 'nodePeople' }, 'PEOPLE')
                ),
                createElement('g', { className: 'network-node', 'data-node': 'customer' },
                  createElement('circle', { cx: '69', cy: '259', r: '31' }),
                  createElement('text', { x: '69', y: '263', 'data-i18n': 'nodeCustomer' }, 'CUSTOMER')
                ),
                createElement('g', { className: 'network-node', 'data-node': 'delivery' },
                  createElement('circle', { cx: '69', cy: '119', r: '31' }),
                  createElement('text', { x: '69', y: '123', 'data-i18n': 'nodeDelivery' }, 'DELIVERY')
                ),
                createElement('g', { className: 'focus-node', 'data-node': 'leverage' },
                  createElement('circle', { className: 'focus-halo', cx: '190', cy: '190', r: '30' }),
                  createElement('circle', { cx: '190', cy: '190', r: '19' }),
                  createElement('text', { x: '190', y: '187' },
                    createElement('tspan', { x: '190', 'data-i18n': 'nodeLeverage' }, 'LEVERAGE'),
                    createElement('tspan', { x: '190', dy: '8', 'data-i18n': 'nodePoint' }, 'POINT')
                  )
                )
              )
            )
          )
        )
      );
    }
  });

  /* ==========================================================================
     2. CLIENTS BLOCK (li-gardner/clients)
     ========================================================================== */
  registerBlockType('li-gardner/clients', {
    title: 'Client Organisations',
    icon: 'building',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: "Selected organisations I've worked with" },
      logos: {
        type: 'array',
        default: DEFAULT_LOGOS
      }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;
      var logos = attr.logos && attr.logos.length ? attr.logos : DEFAULT_LOGOS;
      var selectedLogoIndex = wp.element.useState(0);
      var activeIndex = selectedLogoIndex[0];
      var setActiveIndex = selectedLogoIndex[1];

      var activeLogo = logos[activeIndex] || logos[0] || {};

      function updateLogo(index, updatedFields) {
        var newLogos = logos.slice();
        newLogos[index] = Object.assign({}, newLogos[index], updatedFields);
        setAttr({ logos: newLogos });
      }

      function addLogo() {
        var newLogos = logos.concat([
          {
            id: String(Date.now()),
            text: 'New Client',
            styleClass: 'logo-government'
          }
        ]);
        setAttr({ logos: newLogos });
        setActiveIndex(newLogos.length - 1);
      }

      function removeLogo(index) {
        if (logos.length <= 1) return;
        var newLogos = logos.filter(function (_, i) { return i !== index; });
        setAttr({ logos: newLogos });
        setActiveIndex(Math.max(0, index - 1));
      }

      return createElement('div', { className: 'clients-block-wrapper' },
        createElement(InspectorControls, null,
          createElement(wp.components.PanelBody, { title: 'Selected Logo Settings', initialOpen: true },
            createElement(SelectControl, {
              label: 'Apply Brand Preset',
              help: 'Auto-sets brand name and bespoke typography styling.',
              options: BRAND_PRESETS,
              onChange: function (val) {
                var found = BRAND_PRESETS.find(function (p) { return p.value === val; });
                if (found && found.value) {
                  updateLogo(activeIndex, {
                    text: found.text,
                    styleClass: found.styleClass
                  });
                }
              }
            }),
            createElement(SelectControl, {
              label: 'Typography / Font Style',
              help: 'Override the font styling for this client badge.',
              value: activeLogo.styleClass || 'logo-government',
              options: FONT_STYLE_OPTIONS,
              onChange: function (val) {
                updateLogo(activeIndex, { styleClass: val });
              }
            }),
            createElement('div', { style: { marginTop: '16px', display: 'flex', gap: '8px' } },
              createElement(Button, {
                isPrimary: true,
                onClick: addLogo
              }, '+ Add New Logo'),
              createElement(Button, {
                isDestructive: true,
                onClick: function () { removeLogo(activeIndex); }
              }, 'Remove Logo')
            )
          )
        ),
        createElement('section', { className: 'client-section', id: 'clients' },
          createElement('div', { className: 'shell' },
            createElement(RichText, {
              tagName: 'p',
              className: 'client-label',
              value: attr.label,
              onChange: function (val) { setAttr({ label: val }); },
              placeholder: 'Client section title...'
            }),
            createElement('div', { className: 'client-logos', lang: 'en' },
              logos.map(function (logo, idx) {
                var isSelected = idx === activeIndex;
                var isEa = (logo.styleClass === 'logo-ea-cell');

                return createElement('div', {
                  key: logo.id || idx,
                  className: 'logo-item ' + (logo.styleClass || '') + (isSelected ? ' is-selected-logo' : ''),
                  style: {
                    cursor: 'pointer',
                    outline: isSelected ? '2px solid #ff765e' : 'none',
                    outlineOffset: '-2px'
                  },
                  onClick: function () { setActiveIndex(idx); }
                },
                  isEa
                    ? createElement('span', { className: 'logo-ea' },
                        createElement(RichText, {
                          tagName: 'span',
                          value: logo.text,
                          onChange: function (val) { updateLogo(idx, { text: val }); },
                          placeholder: 'EA'
                        })
                      )
                    : createElement(RichText, {
                        tagName: 'span',
                        value: logo.text,
                        onChange: function (val) { updateLogo(idx, { text: val }); },
                        placeholder: 'Client Name...'
                      })
                );
              })
            ),
            createElement('div', { style: { textAlign: 'center', marginTop: '18px' } },
              createElement(Button, {
                isSecondary: true,
                onClick: addLogo
              }, '+ Add Another Client Logo (Auto-centers)')
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      var logos = attr.logos && attr.logos.length ? attr.logos : DEFAULT_LOGOS;

      return createElement('section', { className: 'client-section', id: 'clients', ariaLabel: attr.label },
        createElement('div', { className: 'shell' },
          createElement(RichText.Content, { tagName: 'p', className: 'client-label reveal', value: attr.label }),
          createElement('div', { className: 'client-logos stagger-group', lang: 'en' },
            logos.map(function (logo, idx) {
              var isEa = (logo.styleClass === 'logo-ea-cell');
              return createElement('span', {
                key: logo.id || idx,
                className: 'logo-item ' + (logo.styleClass || '')
              },
                isEa
                  ? createElement('span', { className: 'logo-ea' },
                      createElement(RichText.Content, { tagName: 'span', value: logo.text })
                    )
                  : createElement(RichText.Content, { tagName: 'span', value: logo.text })
              );
            })
          )
        )
      );
    }
  });

  /* ==========================================================================
     3. TENSION BLOCK (li-gardner/tension)
     ========================================================================== */
  registerBlockType('li-gardner/tension', {
    title: 'Leadership Dilemma (Tension)',
    icon: 'editor-help',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: 'The leadership dilemma' },
      heading: { type: 'string', default: "Most technology investment isn't delivering the return leaders expected." },
      lead: { type: 'string', default: 'Low adoption is the result of building the wrong thing.' },
      copy1: { type: 'string', default: "Point solutions treat symptoms. Large rework programmes promise transformation. Neither fixes what's stuck." },
      copy2: { type: 'string', default: "When complexity already exists, the answer is less, not more. I apply user-centred design at a strategy level—designing for how people actually work, so the technology sticks." }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'tension-section', id: 'tension' },
        createElement('div', { className: 'shell tension-grid' },
          createElement(RichText, {
            tagName: 'p',
            className: 'section-label',
            value: attr.label,
            onChange: function (val) { setAttr({ label: val }); },
            placeholder: 'Section label...'
          }),
          createElement('div', null,
            createElement(RichText, {
              tagName: 'h2',
              value: attr.heading,
              onChange: function (val) { setAttr({ heading: val }); },
              placeholder: 'Main heading...'
            }),
            createElement(RichText, {
              tagName: 'p',
              className: 'tension-lead',
              value: attr.lead,
              onChange: function (val) { setAttr({ lead: val }); },
              placeholder: 'Lead sentence...'
            }),
            createElement(RichText, {
              tagName: 'p',
              className: 'large-copy',
              value: attr.copy1,
              onChange: function (val) { setAttr({ copy1: val }); },
              placeholder: 'Paragraph 1...'
            }),
            createElement(RichText, {
              tagName: 'p',
              className: 'large-copy',
              value: attr.copy2,
              onChange: function (val) { setAttr({ copy2: val }); },
              placeholder: 'Paragraph 2...'
            })
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'tension-section', id: 'tension' },
        createElement('div', { className: 'shell tension-grid' },
          createElement(RichText.Content, { tagName: 'p', className: 'section-label reveal', value: attr.label }),
          createElement('div', { className: 'reveal' },
            createElement(RichText.Content, { tagName: 'h2', value: attr.heading }),
            createElement(RichText.Content, { tagName: 'p', className: 'tension-lead', value: attr.lead }),
            createElement(RichText.Content, { tagName: 'p', className: 'large-copy', value: attr.copy1 }),
            createElement(RichText.Content, { tagName: 'p', className: 'large-copy', value: attr.copy2 })
          )
        )
      );
    }
  });

  /* ==========================================================================
     4. APPROACH BLOCK (li-gardner/approach)
     ========================================================================== */
  registerBlockType('li-gardner/approach', {
    title: 'High-Leverage Intervention (Approach)',
    icon: 'randomize',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: 'A high-leverage intervention' },
      heading1: { type: 'string', default: 'Connect technology,' },
      heading2: { type: 'string', default: 'people and business' },
      heading3: { type: 'string', default: 'for scaled impact' },
      s1Title: { type: 'string', default: 'Frame the opportunity' },
      s1Desc: { type: 'string', default: 'Clarify the user need, business value and constraint where focused action will have the greatest effect.' },
      s2Title: { type: 'string', default: 'Connect the system' },
      s2Desc: { type: 'string', default: 'Bring user, business, technology, data and delivery realities into one decision picture.' },
      s3Title: { type: 'string', default: 'Shape the solution' },
      s3Desc: { type: 'string', default: 'Turn insight into a focused product, platform or service proposition that teams can test, align around and deliver.' },
      s4Title: { type: 'string', default: 'Embed adoption' },
      s4Desc: { type: 'string', default: 'Build the decisions, behaviours and internal capability that turn delivery into sustained use and value.' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'approach-section', id: 'approach' },
        createElement('div', { className: 'shell' },
          createElement('div', { className: 'section-heading' },
            createElement(RichText, {
              tagName: 'p',
              className: 'section-label light',
              value: attr.label,
              onChange: function (val) { setAttr({ label: val }); },
              placeholder: 'Section label...'
            }),
            createElement('h2', null,
              createElement(RichText, { tagName: 'span', value: attr.heading1, onChange: function (val) { setAttr({ heading1: val }); } }),
              createElement('br'),
              createElement(RichText, { tagName: 'span', value: attr.heading2, onChange: function (val) { setAttr({ heading2: val }); } }),
              createElement('br'),
              createElement(RichText, { tagName: 'span', value: attr.heading3, onChange: function (val) { setAttr({ heading3: val }); } })
            )
          ),
          createElement('div', { className: 'steps' },
            createElement('article', { className: 'step-card' },
              createElement('span', null, '01'),
              createElement(RichText, { tagName: 'h3', value: attr.s1Title, onChange: function (val) { setAttr({ s1Title: val }); } }),
              createElement(RichText, { tagName: 'p', value: attr.s1Desc, onChange: function (val) { setAttr({ s1Desc: val }); } })
            ),
            createElement('article', { className: 'step-card' },
              createElement('span', null, '02'),
              createElement(RichText, { tagName: 'h3', value: attr.s2Title, onChange: function (val) { setAttr({ s2Title: val }); } }),
              createElement(RichText, { tagName: 'p', value: attr.s2Desc, onChange: function (val) { setAttr({ s2Desc: val }); } })
            ),
            createElement('article', { className: 'step-card' },
              createElement('span', null, '03'),
              createElement(RichText, { tagName: 'h3', value: attr.s3Title, onChange: function (val) { setAttr({ s3Title: val }); } }),
              createElement(RichText, { tagName: 'p', value: attr.s3Desc, onChange: function (val) { setAttr({ s3Desc: val }); } })
            ),
            createElement('article', { className: 'step-card' },
              createElement('span', null, '04'),
              createElement(RichText, { tagName: 'h3', value: attr.s4Title, onChange: function (val) { setAttr({ s4Title: val }); } }),
              createElement(RichText, { tagName: 'p', value: attr.s4Desc, onChange: function (val) { setAttr({ s4Desc: val }); } })
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'approach-section', id: 'approach' },
        createElement('div', { className: 'shell' },
          createElement('div', { className: 'section-heading reveal' },
            createElement(RichText.Content, { tagName: 'p', className: 'section-label light', value: attr.label }),
            createElement('h2', null,
              createElement(RichText.Content, { tagName: 'span', value: attr.heading1 }),
              createElement('br'),
              createElement(RichText.Content, { tagName: 'span', value: attr.heading2 }),
              createElement('br'),
              createElement(RichText.Content, { tagName: 'span', value: attr.heading3 })
            )
          ),
          createElement('div', { className: 'steps stagger-group' },
            createElement('article', { className: 'step-card' },
              createElement('span', null, '01'),
              createElement(RichText.Content, { tagName: 'h3', value: attr.s1Title }),
              createElement(RichText.Content, { tagName: 'p', value: attr.s1Desc })
            ),
            createElement('article', { className: 'step-card' },
              createElement('span', null, '02'),
              createElement(RichText.Content, { tagName: 'h3', value: attr.s2Title }),
              createElement(RichText.Content, { tagName: 'p', value: attr.s2Desc })
            ),
            createElement('article', { className: 'step-card' },
              createElement('span', null, '03'),
              createElement(RichText.Content, { tagName: 'h3', value: attr.s3Title }),
              createElement(RichText.Content, { tagName: 'p', value: attr.s3Desc })
            ),
            createElement('article', { className: 'step-card' },
              createElement('span', null, '04'),
              createElement(RichText.Content, { tagName: 'h3', value: attr.s4Title }),
              createElement(RichText.Content, { tagName: 'p', value: attr.s4Desc })
            )
          )
        )
      );
    }
  });

  /* ==========================================================================
     5. SERVICES BLOCK (li-gardner/services)
     ========================================================================== */
  registerBlockType('li-gardner/services', {
    title: 'Services Grid',
    icon: 'grid-view',
    category: 'li-gardner',
    attributes: {
      heading: { type: 'string', default: 'My services' },
      s1Title: { type: 'string', default: 'Facilitate North Star vision design' },
      s1Desc: { type: 'string', default: 'Make success clear and concrete, with a shared North Star vision your teams align around, endorse and support.' },
      s1Outcome: { type: 'string', default: 'Connect and set strategy for success' },
      s2Title: { type: 'string', default: 'Lead MVP discovery and scoping' },
      s2Desc: { type: 'string', default: 'Define the right problem to solve, design the minimum viable product (MVP) that will move the needle, and shape the right team to deliver it.' },
      s2Outcome: { type: 'string', default: 'Define the start and build momentum' },
      s3Title: { type: 'string', default: 'Design UX strategy and holistic experience' },
      s3Desc: { type: 'string', default: 'Hands-on UX strategy and end-to-end experience design to make your product stand out, earn adoption and support your ambition to reach millions of users.' },
      s3Outcome: { type: 'string', default: 'Make it real, together' },
      s4Title: { type: 'string', default: 'Build user-centred design capability' },
      s4Desc: { type: 'string', default: 'Establish how successful products are designed and developed in your team, with practical ways of working that deliver lasting benefits.' },
      s4Outcome: { type: 'string', default: 'An innovation engine for continuous value delivery' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'services-section', id: 'services' },
        createElement('div', { className: 'shell' },
          createElement(RichText, {
            tagName: 'h2',
            id: 'services-heading',
            value: attr.heading,
            onChange: function (val) { setAttr({ heading: val }); },
            placeholder: 'Services heading...'
          }),
          createElement('div', { className: 'services-grid' },
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '01'),
              createElement('div', { className: 'service-content' },
                createElement(RichText, { tagName: 'h3', value: attr.s1Title, onChange: function (val) { setAttr({ s1Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.s1Desc, onChange: function (val) { setAttr({ s1Desc: val }); } }),
                createElement(RichText, { tagName: 'p', className: 'service-outcome', value: attr.s1Outcome, onChange: function (val) { setAttr({ s1Outcome: val }); } })
              )
            ),
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '02'),
              createElement('div', { className: 'service-content' },
                createElement(RichText, { tagName: 'h3', value: attr.s2Title, onChange: function (val) { setAttr({ s2Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.s2Desc, onChange: function (val) { setAttr({ s2Desc: val }); } }),
                createElement(RichText, { tagName: 'p', className: 'service-outcome', value: attr.s2Outcome, onChange: function (val) { setAttr({ s2Outcome: val }); } })
              )
            ),
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '03'),
              createElement('div', { className: 'service-content' },
                createElement(RichText, { tagName: 'h3', value: attr.s3Title, onChange: function (val) { setAttr({ s3Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.s3Desc, onChange: function (val) { setAttr({ s3Desc: val }); } }),
                createElement(RichText, { tagName: 'p', className: 'service-outcome', value: attr.s3Outcome, onChange: function (val) { setAttr({ s3Outcome: val }); } })
              )
            ),
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '04'),
              createElement('div', { className: 'service-content' },
                createElement(RichText, { tagName: 'h3', value: attr.s4Title, onChange: function (val) { setAttr({ s4Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.s4Desc, onChange: function (val) { setAttr({ s4Desc: val }); } }),
                createElement(RichText, { tagName: 'p', className: 'service-outcome', value: attr.s4Outcome, onChange: function (val) { setAttr({ s4Outcome: val }); } })
              )
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'services-section', id: 'services', ariaLabelledby: 'services-heading' },
        createElement('div', { className: 'shell' },
          createElement(RichText.Content, { tagName: 'h2', id: 'services-heading', className: 'reveal', value: attr.heading }),
          createElement('div', { className: 'services-grid stagger-group' },
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '01'),
              createElement('div', { className: 'service-content' },
                createElement(RichText.Content, { tagName: 'h3', value: attr.s1Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.s1Desc }),
                createElement(RichText.Content, { tagName: 'p', className: 'service-outcome', value: attr.s1Outcome })
              )
            ),
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '02'),
              createElement('div', { className: 'service-content' },
                createElement(RichText.Content, { tagName: 'h3', value: attr.s2Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.s2Desc }),
                createElement(RichText.Content, { tagName: 'p', className: 'service-outcome', value: attr.s2Outcome })
              )
            ),
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '03'),
              createElement('div', { className: 'service-content' },
                createElement(RichText.Content, { tagName: 'h3', value: attr.s3Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.s3Desc }),
                createElement(RichText.Content, { tagName: 'p', className: 'service-outcome', value: attr.s3Outcome })
              )
            ),
            createElement('article', { className: 'service-card' },
              createElement('span', { className: 'service-number' }, '04'),
              createElement('div', { className: 'service-content' },
                createElement(RichText.Content, { tagName: 'h3', value: attr.s4Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.s4Desc }),
                createElement(RichText.Content, { tagName: 'p', className: 'service-outcome', value: attr.s4Outcome })
              )
            )
          )
        )
      );
    }
  });

  /* ==========================================================================
     6. MODEL BLOCK (li-gardner/model)
     ========================================================================== */
  registerBlockType('li-gardner/model', {
    title: 'Why Me (Lean Principal Model)',
    icon: 'awards',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: 'Why me' },
      heading: { type: 'string', default: 'Lean principal-level expertise, embedded in your team.' },
      m1Title: { type: 'string', default: 'Principal-level, hands-on' },
      m1Desc: { type: 'string', default: 'Former principal consultant at global technology consultancies and strategic research and design leader for multinational client teams. I shape the strategy and work directly on the diagnosis, decisions and delivery.' },
      m2Title: { type: 'string', default: 'Embedded, not separate' },
      m2Desc: { type: 'string', default: 'Bring diverse senior stakeholders across business and technology—from leadership to delivery—around a shared goal. Align priorities, connect teams and build the advocacy network needed to scale change.' },
      m3Title: { type: 'string', default: 'Lean, flexible and quick to engage' },
      m3Desc: { type: 'string', default: 'Direct access to principal-level expertise in my lean, focused engagement—embedded within your own or an existing partner team. Fixed-term and rolling engagements support a quicker start and the flexibility to adapt as priorities change.' },
      m4Title: { type: 'string', default: 'Fresh thinking, capability stays.' },
      m4Desc: { type: 'string', default: 'An independent outside view helps your team challenge assumptions, weigh options and make informed decisions. Working alongside you, I share knowledge and show by doing—so capability grows through the work, not just a handover.' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'model-section', id: 'model' },
        createElement('div', { className: 'shell model-grid' },
          createElement('div', null,
            createElement(RichText, { tagName: 'p', className: 'section-label', value: attr.label, onChange: function (val) { setAttr({ label: val }); } }),
            createElement(RichText, { tagName: 'h2', value: attr.heading, onChange: function (val) { setAttr({ heading: val }); } })
          ),
          createElement('div', { className: 'model-list' },
            createElement('article', { className: 'model-item' },
              createElement('span', null, '01'),
              createElement('div', null,
                createElement(RichText, { tagName: 'h3', value: attr.m1Title, onChange: function (val) { setAttr({ m1Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.m1Desc, onChange: function (val) { setAttr({ m1Desc: val }); } })
              )
            ),
            createElement('article', { className: 'model-item' },
              createElement('span', null, '02'),
              createElement('div', null,
                createElement(RichText, { tagName: 'h3', value: attr.m2Title, onChange: function (val) { setAttr({ m2Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.m2Desc, onChange: function (val) { setAttr({ m2Desc: val }); } })
              )
            ),
            createElement('article', { className: 'model-item' },
              createElement('span', null, '03'),
              createElement('div', null,
                createElement(RichText, { tagName: 'h3', value: attr.m3Title, onChange: function (val) { setAttr({ m3Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.m3Desc, onChange: function (val) { setAttr({ m3Desc: val }); } })
              )
            ),
            createElement('article', { className: 'model-item' },
              createElement('span', null, '04'),
              createElement('div', null,
                createElement(RichText, { tagName: 'h3', value: attr.m4Title, onChange: function (val) { setAttr({ m4Title: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.m4Desc, onChange: function (val) { setAttr({ m4Desc: val }); } })
              )
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'model-section', id: 'model' },
        createElement('div', { className: 'shell model-grid' },
          createElement('div', { className: 'reveal' },
            createElement(RichText.Content, { tagName: 'p', className: 'section-label', value: attr.label }),
            createElement(RichText.Content, { tagName: 'h2', value: attr.heading })
          ),
          createElement('div', { className: 'model-list stagger-group' },
            createElement('article', { className: 'model-item' },
              createElement('span', null, '01'),
              createElement('div', null,
                createElement(RichText.Content, { tagName: 'h3', value: attr.m1Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.m1Desc })
              )
            ),
            createElement('article', { className: 'model-item' },
              createElement('span', null, '02'),
              createElement('div', null,
                createElement(RichText.Content, { tagName: 'h3', value: attr.m2Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.m2Desc })
              )
            ),
            createElement('article', { className: 'model-item' },
              createElement('span', null, '03'),
              createElement('div', null,
                createElement(RichText.Content, { tagName: 'h3', value: attr.m3Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.m3Desc })
              )
            ),
            createElement('article', { className: 'model-item' },
              createElement('span', null, '04'),
              createElement('div', null,
                createElement(RichText.Content, { tagName: 'h3', value: attr.m4Title }),
                createElement(RichText.Content, { tagName: 'p', value: attr.m4Desc })
              )
            )
          )
        )
      );
    }
  });

  /* ==========================================================================
     7. TESTIMONIALS BLOCK (li-gardner/testimonials)
     ========================================================================== */
  registerBlockType('li-gardner/testimonials', {
    title: 'Client Testimonials',
    icon: 'format-quote',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: 'Testimonials' },
      q1P1: { type: 'string', default: 'Li is an outstanding product and service design leader — someone you can trust to take ownership of complex, ambiguous challenges and deliver real outcomes.' },
      q1P2: { type: 'string', default: 'Li has a real strength in building relationships and working effectively with a wide range of stakeholders. What really stands out is Li’s ability to connect strategic intent to practical delivery.' },
      q1Name: { type: 'string', default: 'Dave Clark' },
      q1Role: { type: 'string', default: 'Delivery Director of Zühlke' },
      q2P1: { type: 'string', default: 'I have worked with Li on several high-profile and strategic accounts over the years, where she has always demonstrated incredible capabilities and amazing flair...' },
      q2P2: { type: 'string', default: 'She introduced the framework that would consistently join up the effort by 18 varied communities, and the senior stakeholders very much impressed by her ability not only in product and design, but also in making everyone feeling heard.' },
      q2Name: { type: 'string', default: 'Shen Xu' },
      q2Role: { type: 'string', default: 'Account Director for Co-op' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'testimonial-section', id: 'testimonials' },
        createElement('div', { className: 'shell testimonial-grid' },
          createElement(RichText, { tagName: 'h2', className: 'section-label', value: attr.label, onChange: function (val) { setAttr({ label: val }); } }),
          createElement('div', { className: 'testimonial-list' },
            createElement('figure', { className: 'testimonial' },
              createElement('blockquote', null,
                createElement(RichText, { tagName: 'p', value: attr.q1P1, onChange: function (val) { setAttr({ q1P1: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.q1P2, onChange: function (val) { setAttr({ q1P2: val }); } })
              ),
              createElement('figcaption', null,
                createElement(RichText, { tagName: 'strong', value: attr.q1Name, onChange: function (val) { setAttr({ q1Name: val }); } }),
                createElement(RichText, { tagName: 'span', value: attr.q1Role, onChange: function (val) { setAttr({ q1Role: val }); } })
              )
            ),
            createElement('figure', { className: 'testimonial' },
              createElement('blockquote', null,
                createElement(RichText, { tagName: 'p', value: attr.q2P1, onChange: function (val) { setAttr({ q2P1: val }); } }),
                createElement(RichText, { tagName: 'p', value: attr.q2P2, onChange: function (val) { setAttr({ q2P2: val }); } })
              ),
              createElement('figcaption', null,
                createElement(RichText, { tagName: 'strong', value: attr.q2Name, onChange: function (val) { setAttr({ q2Name: val }); } }),
                createElement(RichText, { tagName: 'span', value: attr.q2Role, onChange: function (val) { setAttr({ q2Role: val }); } })
              )
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'testimonial-section', id: 'testimonials', ariaLabelledby: 'testimonial-heading' },
        createElement('div', { className: 'shell testimonial-grid' },
          createElement(RichText.Content, { tagName: 'h2', className: 'section-label reveal', id: 'testimonial-heading', value: attr.label }),
          createElement('div', { className: 'testimonial-list stagger-group' },
            createElement('figure', { className: 'testimonial' },
              createElement('blockquote', null,
                createElement(RichText.Content, { tagName: 'p', value: attr.q1P1 }),
                createElement(RichText.Content, { tagName: 'p', value: attr.q1P2 })
              ),
              createElement('figcaption', null,
                createElement(RichText.Content, { tagName: 'strong', value: attr.q1Name }),
                createElement(RichText.Content, { tagName: 'span', value: attr.q1Role })
              )
            ),
            createElement('figure', { className: 'testimonial' },
              createElement('blockquote', null,
                createElement(RichText.Content, { tagName: 'p', value: attr.q2P1 }),
                createElement(RichText.Content, { tagName: 'p', value: attr.q2P2 })
              ),
              createElement('figcaption', null,
                createElement(RichText.Content, { tagName: 'strong', value: attr.q2Name }),
                createElement(RichText.Content, { tagName: 'span', value: attr.q2Role })
              )
            )
          )
        )
      );
    }
  });

  /* ==========================================================================
     8. ABOUT BLOCK (li-gardner/about)
     ========================================================================== */
  registerBlockType('li-gardner/about', {
    title: 'About Li & Credentials',
    icon: 'id-alt',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: 'About Li' },
      heading: { type: 'string', default: 'A strategic catalyst who can go deep—and work across silos.' },
      copy1: { type: 'string', default: 'I bring more than 20 years of strategic and hands-on experience across consulting, technology and complex organisations. I connect leaders, specialists and delivery teams to turn ambiguity into aligned decisions and practical momentum.' },
      copy2: { type: 'string', default: 'My work spans product and platform strategy, user research, service design, data, technology, operating models, change and delivery. Method- and stack-agnostic, I focus on the user and business outcomes that should shape the solution—not a predetermined answer.' },
      cred1Num: { type: 'string', default: '20+' },
      cred1Label: { type: 'string', default: 'years connecting strategy and delivery' },
      cred2Title: { type: 'string', default: 'Global' },
      cred2Label: { type: 'string', default: 'private and public-sector experience' },
      cred3Title: { type: 'string', default: 'Lean' },
      cred3Label: { type: 'string', default: 'independent, principal-led model' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'about-section', id: 'about' },
        createElement('div', { className: 'shell about-grid' },
          createElement('div', { className: 'about-mark', ariaHidden: 'true' }, 'LG'),
          createElement('div', { className: 'about-copy' },
            createElement(RichText, { tagName: 'p', className: 'section-label', value: attr.label, onChange: function (val) { setAttr({ label: val }); } }),
            createElement(RichText, { tagName: 'h2', value: attr.heading, onChange: function (val) { setAttr({ heading: val }); } }),
            createElement(RichText, { tagName: 'p', className: 'large-copy', value: attr.copy1, onChange: function (val) { setAttr({ copy1: val }); } }),
            createElement(RichText, { tagName: 'p', value: attr.copy2, onChange: function (val) { setAttr({ copy2: val }); } }),
            createElement('div', { className: 'credentials' },
              createElement('div', { className: 'credential-item' },
                createElement(RichText, { tagName: 'strong', value: attr.cred1Num, onChange: function (val) { setAttr({ cred1Num: val }); } }),
                createElement(RichText, { tagName: 'span', value: attr.cred1Label, onChange: function (val) { setAttr({ cred1Label: val }); } })
              ),
              createElement('div', { className: 'credential-item' },
                createElement(RichText, { tagName: 'strong', value: attr.cred2Title, onChange: function (val) { setAttr({ cred2Title: val }); } }),
                createElement(RichText, { tagName: 'span', value: attr.cred2Label, onChange: function (val) { setAttr({ cred2Label: val }); } })
              ),
              createElement('div', { className: 'credential-item' },
                createElement(RichText, { tagName: 'strong', value: attr.cred3Title, onChange: function (val) { setAttr({ cred3Title: val }); } }),
                createElement(RichText, { tagName: 'span', value: attr.cred3Label, onChange: function (val) { setAttr({ cred3Label: val }); } })
              )
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'about-section', id: 'about' },
        createElement('div', { className: 'shell about-grid' },
          createElement('div', { className: 'about-mark reveal', ariaHidden: 'true' }, 'LG'),
          createElement('div', { className: 'about-copy reveal' },
            createElement(RichText.Content, { tagName: 'p', className: 'section-label', value: attr.label }),
            createElement(RichText.Content, { tagName: 'h2', value: attr.heading }),
            createElement(RichText.Content, { tagName: 'p', className: 'large-copy', value: attr.copy1 }),
            createElement(RichText.Content, { tagName: 'p', value: attr.copy2 }),
            createElement('div', { className: 'credentials stagger-group' },
              createElement('div', { className: 'credential-item' },
                createElement(RichText.Content, { tagName: 'strong', value: attr.cred1Num }),
                createElement(RichText.Content, { tagName: 'span', value: attr.cred1Label })
              ),
              createElement('div', { className: 'credential-item' },
                createElement(RichText.Content, { tagName: 'strong', value: attr.cred2Title }),
                createElement(RichText.Content, { tagName: 'span', value: attr.cred2Label })
              ),
              createElement('div', { className: 'credential-item' },
                createElement(RichText.Content, { tagName: 'strong', value: attr.cred3Title }),
                createElement(RichText.Content, { tagName: 'span', value: attr.cred3Label })
              )
            )
          )
        )
      );
    }
  });

  /* ==========================================================================
     9. FIT BLOCK (li-gardner/fit)
     ========================================================================== */
  registerBlockType('li-gardner/fit', {
    title: 'Where I\'m Most Useful (Fit)',
    icon: 'yes-alt',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: "Where I'm most useful" },
      heading1: { type: 'string', default: 'You have capability.' },
      heading2: { type: 'string', default: 'But progress is constrained.' },
      item1: { type: 'string', default: 'Product, user, business and technology priorities are disconnected.' },
      item2: { type: 'string', default: 'Teams are delivering features and activity without materially improving adoption or business value.' },
      item3: { type: 'string', default: 'Teams are solving local symptoms while the wider system gets harder to change.' },
      item4: { type: 'string', default: 'You need outside challenge and senior judgement—while retaining control.' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'fit-section', id: 'fit' },
        createElement('div', { className: 'shell fit-grid' },
          createElement(RichText, { tagName: 'p', className: 'section-label light', value: attr.label, onChange: function (val) { setAttr({ label: val }); } }),
          createElement('div', null,
            createElement('h2', null,
              createElement(RichText, { tagName: 'span', value: attr.heading1, onChange: function (val) { setAttr({ heading1: val }); } }),
              createElement('br'),
              createElement(RichText, { tagName: 'span', value: attr.heading2, onChange: function (val) { setAttr({ heading2: val }); } })
            ),
            createElement('ul', null,
              createElement('li', null, createElement('span', null, '01'), createElement(RichText, { tagName: 'span', value: attr.item1, onChange: function (val) { setAttr({ item1: val }); } })),
              createElement('li', null, createElement('span', null, '02'), createElement(RichText, { tagName: 'span', value: attr.item2, onChange: function (val) { setAttr({ item2: val }); } })),
              createElement('li', null, createElement('span', null, '03'), createElement(RichText, { tagName: 'span', value: attr.item3, onChange: function (val) { setAttr({ item3: val }); } })),
              createElement('li', null, createElement('span', null, '04'), createElement(RichText, { tagName: 'span', value: attr.item4, onChange: function (val) { setAttr({ item4: val }); } }))
            )
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'fit-section', id: 'fit' },
        createElement('div', { className: 'shell fit-grid' },
          createElement(RichText.Content, { tagName: 'p', className: 'section-label light reveal', value: attr.label }),
          createElement('div', { className: 'reveal' },
            createElement('h2', null,
              createElement(RichText.Content, { tagName: 'span', value: attr.heading1 }),
              createElement('br'),
              createElement(RichText.Content, { tagName: 'span', value: attr.heading2 })
            ),
            createElement('ul', { className: 'stagger-group' },
              createElement('li', null, createElement('span', null, '01'), createElement(RichText.Content, { tagName: 'span', value: attr.item1 })),
              createElement('li', null, createElement('span', null, '02'), createElement(RichText.Content, { tagName: 'span', value: attr.item2 })),
              createElement('li', null, createElement('span', null, '03'), createElement(RichText.Content, { tagName: 'span', value: attr.item3 })),
              createElement('li', null, createElement('span', null, '04'), createElement(RichText.Content, { tagName: 'span', value: attr.item4 }))
            )
          )
        )
      );
    }
  });

  /* ==========================================================================
     10. CONTACT BLOCK (li-gardner/contact)
     ========================================================================== */
  registerBlockType('li-gardner/contact', {
    title: 'Contact & Conversation Form',
    icon: 'email-alt',
    category: 'li-gardner',
    attributes: {
      label: { type: 'string', default: 'Start a conversation' },
      heading: { type: 'string', default: "Let's find what is really holding progress back." },
      copy: { type: 'string', default: 'Need a catalyst, not an army? I help your team unlock more value from the capabilities you already have, bring a fresh perspective and build momentum—without trying to change the whole world at once.' },
      email: { type: 'string', default: 'li.gardner.design@gmail.com' },
      responseGuarantee: { type: 'string', default: 'You will receive a response within 48 hours' },
      btnText: { type: 'string', default: 'Send message' },
      note: { type: 'string', default: 'Available for independent advisory and embedded transformation engagements.' }
    },
    edit: function (props) {
      var attr = props.attributes;
      var setAttr = props.setAttributes;

      return createElement('section', { className: 'contact-section', id: 'contact' },
        createElement('div', { className: 'shell contact-grid' },
          createElement(RichText, { tagName: 'p', className: 'section-label', value: attr.label, onChange: function (val) { setAttr({ label: val }); } }),
          createElement('div', null,
            createElement(RichText, { tagName: 'h2', value: attr.heading, onChange: function (val) { setAttr({ heading: val }); } }),
            createElement(RichText, { tagName: 'p', value: attr.copy, onChange: function (val) { setAttr({ copy: val }); } }),
            createElement('div', { className: 'contact-direct-wrap' },
              createElement('div', { className: 'direct-email-link' },
                createElement('svg', { width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                  createElement('rect', { width: '20', height: '16', x: '2', y: '4', rx: '2' }),
                  createElement('path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' })
                ),
                createElement(RichText, {
                  tagName: 'span',
                  className: 'direct-email-text',
                  value: attr.email,
                  onChange: function (val) { setAttr({ email: val }); },
                  placeholder: 'Email address...'
                })
              ),
              createElement('div', { className: 'response-guarantee' },
                createElement('span', { className: 'status-pulse-dot' }),
                createElement(RichText, {
                  tagName: 'span',
                  value: attr.responseGuarantee,
                  onChange: function (val) { setAttr({ responseGuarantee: val }); },
                  placeholder: 'Response guarantee note...'
                })
              )
            ),
            createElement('div', { className: 'contact-form' },
              createElement('div', { className: 'form-row' },
                createElement('div', { className: 'form-group' },
                  createElement('label', null, 'Your Name'),
                  createElement('input', { type: 'text', disabled: true, placeholder: 'Jane Doe' })
                ),
                createElement('div', { className: 'form-group' },
                  createElement('label', null, 'Your Email'),
                  createElement('input', { type: 'email', disabled: true, placeholder: 'jane@example.com' })
                )
              ),
              createElement('div', { className: 'form-group' },
                createElement('label', null, 'Message'),
                createElement('textarea', { rows: '4', disabled: true, placeholder: 'Tell me about your product, platform or strategy challenge...' })
              ),
              createElement('div', { className: 'form-actions' },
                createElement('button', { type: 'button', className: 'consultation-cta consultation-cta-bottom' },
                  createElement(RichText, { tagName: 'span', value: attr.btnText, onChange: function (val) { setAttr({ btnText: val }); } }),
                  createElement('svg', { viewBox: '0 0 24 24', className: 'arrow-icon diagonal', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' },
                    createElement('path', { d: 'M5 12h14M14 7l5 5-5 5' })
                  )
                )
              )
            ),
            createElement(RichText, { tagName: 'p', className: 'contact-note', value: attr.note, onChange: function (val) { setAttr({ note: val }); } })
          )
        )
      );
    },
    save: function (props) {
      var attr = props.attributes;
      return createElement('section', { className: 'contact-section', id: 'contact' },
        createElement('div', { className: 'shell contact-grid' },
          createElement(RichText.Content, { tagName: 'p', className: 'section-label reveal', value: attr.label }),
          createElement('div', { className: 'reveal' },
            createElement(RichText.Content, { tagName: 'h2', value: attr.heading }),
            createElement(RichText.Content, { tagName: 'p', value: attr.copy }),
            createElement('div', { className: 'contact-direct-wrap' },
              createElement('a', { href: 'mailto:' + (attr.email || 'li.gardner.design@gmail.com'), className: 'direct-email-link', id: 'direct-email-link' },
                createElement('svg', { ariaHidden: 'true', width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                  createElement('rect', { width: '20', height: '16', x: '2', y: '4', rx: '2' }),
                  createElement('path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' })
                ),
                createElement(RichText.Content, { tagName: 'span', className: 'direct-email-text', value: attr.email })
              ),
              createElement('div', { className: 'response-guarantee' },
                createElement('span', { className: 'status-pulse-dot', ariaHidden: 'true' }),
                createElement(RichText.Content, { tagName: 'span', value: attr.responseGuarantee })
              )
            ),
            createElement('form', { className: 'contact-form', id: 'contact-form', method: 'post', action: '' },
              createElement('input', { type: 'hidden', name: 'action', value: 'li_gardner_contact' }),
              createElement('div', { className: 'form-row' },
                createElement('div', { className: 'form-group' },
                  createElement('label', { htmlFor: 'contact-name' }, 'Your Name'),
                  createElement('input', { type: 'text', id: 'contact-name', name: 'name', required: true, placeholder: 'Jane Doe' })
                ),
                createElement('div', { className: 'form-group' },
                  createElement('label', { htmlFor: 'contact-email' }, 'Your Email'),
                  createElement('input', { type: 'email', id: 'contact-email', name: 'email', required: true, placeholder: 'jane@example.com' })
                )
              ),
              createElement('div', { className: 'form-group' },
                createElement('label', { htmlFor: 'contact-message' }, 'Message'),
                createElement('textarea', { id: 'contact-message', name: 'message', rows: '4', required: true, placeholder: 'Tell me about your product, platform or strategy challenge...' })
              ),
              createElement('div', { className: 'form-actions' },
                createElement('button', { type: 'submit', className: 'consultation-cta consultation-cta-bottom', id: 'contact-submit-btn' },
                  createElement(RichText.Content, { tagName: 'span', value: attr.btnText }),
                  createElement('svg', { ariaHidden: 'true', viewBox: '0 0 24 24', className: 'arrow-icon diagonal', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' },
                    createElement('path', { d: 'M5 12h14M14 7l5 5-5 5' })
                  )
                ),
                createElement('div', { className: 'form-feedback', id: 'form-feedback', role: 'alert' })
              )
            ),
            createElement(RichText.Content, { tagName: 'p', className: 'contact-note', value: attr.note })
          )
        )
      );
    },
    deprecated: [
      {
        attributes: {
          label: { type: 'string', default: 'Start a conversation' },
          heading: { type: 'string', default: "Let's find what is really holding progress back." },
          copy: { type: 'string', default: 'Need a catalyst, not an army? I help your team unlock more value from the capabilities you already have, bring a fresh perspective and build momentum—without trying to change the whole world at once.' },
          btnText: { type: 'string', default: 'Send message' },
          note: { type: 'string', default: 'Available for independent advisory and embedded transformation engagements.' }
        },
        save: function (props) {
          var attr = props.attributes;
          return createElement('section', { className: 'contact-section', id: 'contact' },
            createElement('div', { className: 'shell contact-grid' },
              createElement(RichText.Content, { tagName: 'p', className: 'section-label reveal', value: attr.label }),
              createElement('div', { className: 'reveal' },
                createElement(RichText.Content, { tagName: 'h2', value: attr.heading }),
                createElement(RichText.Content, { tagName: 'p', value: attr.copy }),
                createElement('form', { className: 'contact-form', id: 'contact-form', method: 'post', action: '' },
                  createElement('input', { type: 'hidden', name: 'action', value: 'li_gardner_contact' }),
                  createElement('div', { className: 'form-row' },
                    createElement('div', { className: 'form-group' },
                      createElement('label', { htmlFor: 'contact-name' }, 'Your Name'),
                      createElement('input', { type: 'text', id: 'contact-name', name: 'name', required: true, placeholder: 'Jane Doe' })
                    ),
                    createElement('div', { className: 'form-group' },
                      createElement('label', { htmlFor: 'contact-email' }, 'Your Email'),
                      createElement('input', { type: 'email', id: 'contact-email', name: 'email', required: true, placeholder: 'jane@example.com' })
                    )
                  ),
                  createElement('div', { className: 'form-group' },
                    createElement('label', { htmlFor: 'contact-message' }, 'Message'),
                    createElement('textarea', { id: 'contact-message', name: 'message', rows: '4', required: true, placeholder: 'Tell me about your product, platform or strategy challenge...' })
                  ),
                  createElement('div', { className: 'form-actions' },
                    createElement('button', { type: 'submit', className: 'consultation-cta consultation-cta-bottom', id: 'contact-submit-btn' },
                      createElement(RichText.Content, { tagName: 'span', value: attr.btnText }),
                      createElement('svg', { ariaHidden: 'true', viewBox: '0 0 24 24', className: 'arrow-icon diagonal', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' },
                        createElement('path', { d: 'M5 12h14M14 7l5 5-5 5' })
                      )
                    ),
                    createElement('div', { className: 'form-feedback', id: 'form-feedback', role: 'alert' })
                  )
                ),
                createElement(RichText.Content, { tagName: 'p', className: 'contact-note', value: attr.note })
              )
            )
          );
        }
      }
    ]
  });

})(window.wp);
