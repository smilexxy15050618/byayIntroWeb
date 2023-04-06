import { LinkProps } from 'next/link';
import * as React from 'react';

export function withOpenOriginLink(Link) {
  return class extends React.Component<LinkProps> {
    state = {
      isOpenOrigin: false,
    };

    componentDidMount() {
      const isOpenOrigin = location.origin.indexOf('open.byai.com') > 0;
      this.setState({
        isOpenOrigin,
      });
    }

    render() {
      const { href = '', ...rest } = this.props;
      const isRelativePath = typeof href === 'string' && href.indexOf('/') === 0;
      return (
        <Link
          href={this.state.isOpenOrigin && isRelativePath && href !== '/' ? `https://www.byai.com${href}` : href}
          {...rest}
        />
      );
    }
  };
}
