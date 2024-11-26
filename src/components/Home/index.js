import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]

const Home = () => {
  return (
    <div className="home-bg-container">
      <div className="user-info-container">
        <div>
          <img
            className="profile-image"
            alt="profile"
            src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          />
        </div>
        <p className="username">Wade Warren</p>
        <p className="role">Software decloper at UK</p>
      </div>
      <div className="blog-post-container">
        {blogsList.map(each => (
          <div className="blog-post-item">
            <div className="title-publishedDate">
              <p className="title">{each.title}</p>
              <p className="publishedDate">{each.publishedDate}</p>
            </div>
            <p className="description">{each.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
