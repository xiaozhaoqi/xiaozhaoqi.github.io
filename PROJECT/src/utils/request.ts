const leftToken = '61e06fdec3996fbda3c'
const rightToken = 'eb8094d137bf927e7e5b2'
// 文字
async function getArticleList() {
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article',
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
    }
  )
    .then((res) => {
      if (res.status < 299) return res.json()
      else return null
    })
    .then((res) => {
      return res
    })
}
async function getArticle(name) {
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article/' + name,
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res
    })
}
async function sendNewArticle(title, content, category) {
  const time = Date.now()
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article/' +
      title +
      '-' +
      time +
      '.md',
    {
      method: 'PUT',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
      body: JSON.stringify({
        message: 'AutoPush Article: ' + title,
        // @ts-ignore
        content: btoa(
          unescape(
            encodeURIComponent(
              JSON.stringify({
                title: title,
                content: content,
                time: time,
                category: category,
              })
            )
          )
        ),
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return true
    })
    .catch((err) => {
      return false
    })
}
async function removeArticle(title, sha) {
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article/' +
      title +
      '.md',
    {
      method: 'DELETE',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
      body: JSON.stringify({
        message: 'AutoDelete article: ' + title,
        // @ts-ignore
        sha: sha,
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
// 图片
async function getPhotoList() {
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/photo',
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
    }
  )
    .then((res) => {
      if (res.status < 299) return res.json()
      else return null
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
async function getPhoto(name) {
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/photo/' + name,
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
async function sendNewPhoto(title, content) {
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/photo/' +
      title +
      '.png',
    {
      method: 'PUT',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
      body: JSON.stringify({
        message: 'AutoPush Photo: ' + title,
        // @ts-ignore
        content: btoa(
          unescape(
            encodeURIComponent(
              JSON.stringify({
                title: title,
                content: content,
                time: title,
              })
            )
          )
        ),
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return true
    })
    .catch((err) => {
      return false
    })
}
async function removePhoto(title, sha) {
  return await fetch(
    'https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/photo/' +
      title +
      '.png',
    {
      method: 'DELETE',
      headers: {
        Authorization: 'token ' + leftToken + rightToken,
      },
      body: JSON.stringify({
        message: 'AutoDelete Photo: ' + title,
        // @ts-ignore
        sha: sha,
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
async function getUserInfo() {
  return await fetch('https://api.github.com/search/users?q=xiaozhaoqi')
    .then((res) => res.json())
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export {
  getArticleList,
  getArticle,
  sendNewArticle,
  sendNewPhoto,
  getPhotoList,
  getPhoto,
  removePhoto,
  removeArticle,
  getUserInfo,
}
