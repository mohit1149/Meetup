import {
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
  NotFoundContainer,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundParagraph>
      We are sorry, the page you requested could not be found
    </NotFoundParagraph>
  </NotFoundContainer>
)

export default NotFound
