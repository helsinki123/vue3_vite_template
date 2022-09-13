import request from '../utils/request.js'
export const loginApi = data => {
  return request({
    url: '/api/bidingDetail/searchSingleBidingDetailApprove',
    method: 'post',
    data: data
  })
}
