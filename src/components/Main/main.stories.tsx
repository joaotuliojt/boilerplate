import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
Basic.args = {
  description: 'Typescript, ReactJS, NextJS e Styled Components',
  title: 'React avançado'
}
