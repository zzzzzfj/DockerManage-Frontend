import SvgIcon from '@/components/SvgIcon'

const SvgRequired = require.contextr('./svg', false, /\.svg$/)
SvgRequired.keys().forEach((item) => SvgRequired(item))

export default (app) => {
    app.component('svg-icon', SvgIcon)
}
