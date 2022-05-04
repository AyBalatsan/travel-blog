import Head from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link'


const Main = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>       
      </Head>
      <Navbar />
      <Wrapper>
        <div className='container'>
          <PostsWrapper>
            <Post>
              <Link href={'/post/[id]'} as={'/post/test-rop'}>
                <PostShell>
                  <PostImg bgImage='https://fb.ru/misc/i/gallery/48915/2279925.jpg' />
                  <PostText>Мальдивы. Рай или пафос ?</PostText>
                </PostShell>
              </Link>
            </Post>
            <Post>
              <PostShell>
                <PostImg bgImage='https://fb.ru/misc/i/gallery/48915/2279925.jpg' />     
                <PostText>Мальдивы. Рай или пафос ?</PostText>
              </PostShell>
            </Post>
            <Post>
              <PostShell>
                <PostImg bgImage='https://fb.ru/misc/i/gallery/48915/2279925.jpg' />     
                <PostText>Мальдивы. Рай или пафос ?</PostText>
              </PostShell>
            </Post>
            <Post>
              <PostShell>
                <PostImg bgImage='https://fb.ru/misc/i/gallery/48915/2279925.jpg' />     
                <PostText>Мальдивы. Рай или пафос ?</PostText>
              </PostShell>
            </Post>
            <Post>
              <PostShell>
                <PostImg bgImage='https://fb.ru/misc/i/gallery/48915/2279925.jpg' />     
                <PostText>Мальдивы. Рай или пафос?</PostText>
              </PostShell>
            </Post>
          </PostsWrapper>
        </div>  
      </Wrapper>
    </div>
  )
}

export default Main

const Wrapper = styled.div`
  background-color: #EEF5FF;
  min-height: calc(100vh - 55px);
  width: 100%;
  padding: 50px 0;
`
const PostsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  gap: 50px 30px;
  width: 100%;
`
const Post = styled.li`
  width: 100%;
  min-height: 270px;
  border-radius: 15px;  
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
  overflow: hidden;
  &:hover{
    transform: scale(1.1);
  }
`
const PostShell = styled.a`
  display: flex;
  flex-direction: column;
`
const PostImg = styled.div`
  width: 100%;
  height: 220px;  
  background: no-repeat url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`
const PostText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3260A1;
  max-width: 86%;
  padding: 15px 20px;
`