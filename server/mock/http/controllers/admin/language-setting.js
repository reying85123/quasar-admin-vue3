export default [
  {
    url: '/api/language_setting',
    method: 'get',
    response: (req, res) => {
      return {
        code: 200,
        data: {
          list: [],
        },
      }
    },
  },
]
