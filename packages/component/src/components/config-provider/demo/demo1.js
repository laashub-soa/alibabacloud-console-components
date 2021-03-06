import React from 'react'
import { ConfigProvider } from '@alicloud/console-components'
import PropTypes from 'prop-types'

const { config } = ConfigProvider

class Output extends React.Component {
  static propTypes = {
    prefix: PropTypes.string,
    locale: PropTypes.object,
    pure: PropTypes.bool
  }

  static defaultProps = {
    prefix: 'next-',
    locale: {
      hello: '你好'
    },
    pure: false
  }

  render() {
    const { prefix, locale, pure } = this.props

    return (
      <ul>
        <li>prefix: {prefix}</li>
        <li>locale: {JSON.stringify(locale)}</li>
        <li>pure: {pure.toString()}</li>
      </ul>
    )
  }
}

const NewOutput = config(Output)

export default class Demo1 extends React.Component {
  render() {
    return (
      <ConfigProvider prefix="custom-" locale={{ Output: { hello: 'hello' } }} pure>
        <NewOutput />
      </ConfigProvider>
    )
  }
}