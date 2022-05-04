import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
// import im from ''

const post = () => {
  return (
    <>
      <Head>
        <title>post</title>
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
          <WrapperPost>
            <WrapperBlockText>
              <Title>Альпы.  Покори вершину с нами!</Title>
              <ShellText>
                <p>А́льпы (фр. Alpes, нем. Alpen, итал. Alpi, романш. Alps, словен. Alpe) — самый высокий и протяжённый горный хребет среди систем, целиком лежащих в Европе. При этом Кавказские горы выше, а Уральские — протяжённей, но они лежат также и на территории Азии (в зависимости от выбранного определения границы между Европой и Азией).</p>
                <p>Альпы представляют собой сложную систему хребтов и массивов, протянувшуюся выпуклой к северо-западу дугой от Лигурийского моря до Среднедунайской низменности. Альпы располагаются на территории 8 стран: Франции, Монако, Италии, Швейцарии, Германии, Австрии, Лихтенштейна и Словении. Общая длина альпийской дуги составляет около 1200 км (по внутреннему краю дуги — около 750 км), ширина — до 260 км. Самой высокой вершиной Альп является гора Монблан высотой 4810 метров над уровнем моря, расположенная на границе Франции и Италии[1]. Всего в Альпах сосредоточено около 100 вершин-четырёхтысячников[2].</p>
              </ShellText>
            </WrapperBlockText>
            <ShellImg>
              <Image
                src='/2.jpg'
                // src='https://img5.goodfon.ru/original/4562x3041/8/4d/shveitsariia-zima-sneg-gory-alpy-domiki.jpg'
                alt="Photo of the place"
                width={540}
                height={316}
              />
            </ShellImg>  
            <Del>Удалить статью</Del>      
          </WrapperPost>     
        </div>
      </Wrapper>
    </>
  )
}

export default post

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
const WrapperPost = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  padding: 35px 35px 50px;
  background: #FEFEFE;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
`
const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #3260A1;
  margin-bottom: 25px;
`
const WrapperBlockText = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
`
const ShellText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  p{      
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`
const ShellImg = styled.div`
  margin-top: 100px;
`
const Del = styled.a`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 12px);
  width: 139px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: #EB5050;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  transition: all 0.4s;
  cursor: pointer;
  &:hover{    
    background-color: #ff2525;
  }
`