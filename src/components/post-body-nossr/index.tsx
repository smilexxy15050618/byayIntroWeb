import { ReactRenderer } from '@atlaskit/renderer';
import * as ReactDOM from 'react-dom';
export default function PostBodyNoSsr({ content }: { content: Record<string, any> }) {
  return ReactDOM.createPortal(
    <div>{!!content && <ReactRenderer document={content} appearance="full-width" allowDynamicTextSizing />}</div>,
    document.querySelector('#news-container > #__next > div > main'),
  );
}
