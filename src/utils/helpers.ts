import moment from 'moment'
const formatDate = (time: string) => {
    return moment(time).format('lll');
}

const characterLimit = (text: string, limit: number) => text.length > limit ? (text.substr(0, limit - 1).trim() + '...') : text;

export {
    formatDate,
    characterLimit
}