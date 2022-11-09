import { withKnobs, text } from '@storybook/addon-knobs'
import Main from './index'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () =>(
  <Main 
    title={ text( 'Title', 'React Avançado' ) }
    description={ text( 'Description', 'TypeScript, ReactJs, NextJs e Styled Components' )} 
  />
) 
