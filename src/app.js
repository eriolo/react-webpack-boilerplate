import React from 'react';
import { render } from 'react-dom';
import WithStylesContext from '@views/components/WithStylesContext';
import { onInsertCss } from '@utils/helpers/onInsertCss';
import About from '@views/pages/About';
import normalizeCss from 'normalize.css';
import scaffoldingCss from '@styles/base/scaffolding.scss';

normalizeCss._insertCss();
scaffoldingCss._insertCss();

render(
  <WithStylesContext onInsertCss={onInsertCss}>
    <About />
  </WithStylesContext>,
  document.getElementById('react-placeholder')
);
