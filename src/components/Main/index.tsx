import * as S from './styles'
const Main = ({ title = 'React', description = 'TypeScript, React, Next' }) => (
 <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="imagem de átomo com a com rosa"/>
    <S.Title>{ title }</S.Title>
    <S.Description>{ description }</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt=" Um rapaz sentando de frente para computador"/>
 </S.Wrapper>   
)

export default Main
