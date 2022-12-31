import moment from 'moment'
const formatDate = (time: string) => {
    return moment(time).format('lll');
}

export {
    formatDate
}