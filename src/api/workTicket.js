import request from '@/utils/request'


export function workTicketpage (data) {
  return request({
    url: '/ppm/workTicket/page',
    method: 'post',
    data
  })
}