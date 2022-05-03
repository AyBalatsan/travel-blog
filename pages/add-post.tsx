import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'

const addPost = () => {
  return (
    <>
      <Head>
        <title>Add new post</title>
      </Head>
      <Navbar />
      <Wrapper>
        <div className='container'>
          <Link href='/'>
            <BackBtn>
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.419016 6.64373L0.420301 6.64258L7.88487 0.352254C8.44408 -0.118976 9.34858 -0.117222 9.90523 0.356367C10.4618 0.829895 10.4597 1.5958 9.90044 2.06709L4.88873 6.29032H22.5714C23.3604 6.29032 24 6.8319 24 7.5C24 8.16811 23.3604 8.70968 22.5714 8.70968H4.8888L9.90037 12.9329C10.4596 13.4042 10.4617 14.1701 9.90516 14.6436C9.34851 15.1173 8.44394 15.1189 7.8848 14.6477L0.420231 8.35742L0.418943 8.35627C-0.140556 7.88341 -0.13877 7.11502 0.419016 6.64373Z" fill="#3260A1" />
              </svg>
              Назад
            </BackBtn>
            
          </Link>
          <FormWrapper>
              <Label htmlFor="titleOfTheArticle">
                Название статьи:
                <Input
                  type="text"
                  id='titleOfTheArticle'  
                />
              </Label>
              
              <Label htmlFor="textOfTheArticle">
                Текст статьи:
                <TextArea id='textOfTheArticle'  />
              </Label>
              
              <Label htmlFor="photoOfTheArticle">
                URL картинки:
                <Input type="text" id='photoOfTheArticle' />
              </Label>
              <Btn>Добавить</Btn>
            </FormWrapper>
        </div>
      </Wrapper>
    </>
  )
}

export default addPost

const Wrapper = styled.div`
  background-color: #EEF5FF;
  min-height: calc(100vh - 55px);
  width: 100%;
  padding: 50px 0;
`
const BackBtn = styled.a`
  width: fit-content;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #FFFFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3260A1;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  padding: 30px;
  background: #FFFFFF;
  border-radius: 15px;
  gap: 15px;
  margin: 120px auto 0;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  width: 100%;
`

const Input = styled.input`
  border: 1px solid #E5E5E5;
  width: 100%;
  height: 33px;
  border-radius: 5px;
  padding: 4px 10px;
`
const TextArea = styled.textarea`
  border: 1px solid #E5E5E5;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  resize: none;
`
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 38px;
  width: fit-content;
  background: #67BFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  margin-top: 15px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  
  transition: all 0.4s;
  cursor: pointer;
  &:hover{    
    background: #4eb3fc;
  }
`