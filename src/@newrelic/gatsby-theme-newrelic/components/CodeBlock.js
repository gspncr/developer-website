import React from 'react';
import CodeBlock from '@newrelic/gatsby-theme-newrelic/src/components/CodeBlock';
import Terminal from '../../../components/Terminal';
import { isShellLanguage } from '../../../utils/codeBlock';

const CustomCodeBlock = ({ language, children, ...props }) => {
  return isShellLanguage(language) ? (
    <Terminal>{children}</Terminal>
  ) : (
    <CodeBlock language={language} {...props}>
      {children}
    </CodeBlock>
  );
};

CustomCodeBlock.propTypes = CodeBlock.propTypes;

export default CustomCodeBlock;