// styles
import {
  StyledLink,
  StyledBox,
  StyledToggle,
  TitleAccount,
  StyledLinkActive,
} from './Toggle.module'

interface ILabel {
  currentUrl: string
  label: string
}

interface IToggle {
  labelToggle: ILabel[]
  pageUrl: string
  title: string
}

const Toggle = ({ title, pageUrl, labelToggle }: IToggle) => (
  <StyledToggle>
    <TitleAccount>{title}</TitleAccount>
    <StyledBox>
      {labelToggle.map((item) => (
        <StyledLink
          key={item.label}
          to={item.currentUrl}
          sx={{ ...(pageUrl === item.currentUrl && StyledLinkActive) }}
        >
          {item.label}
        </StyledLink>
      ))}
    </StyledBox>
  </StyledToggle>
)

export default Toggle
