import { formatDistanceToNow } from 'date-fns'

const date =  '1992-09-01 10:10:10'
document.body.textContent=formatDistanceToNow(new Date(date)) +'岁'