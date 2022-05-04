import styled from 'styled-components'
import Link from 'next/link'



const Navbar = () => {
  return (
    <Nav >
      <div className='container'>
        <NavbarItem>
          <Logo>NEXT | BLOG</Logo>
          <Link href='/add-post'>
            <AddPostBtn>Добавить статью</AddPostBtn>
          </Link>
        </NavbarItem>
      </div>
    </Nav>
  )
}
export default Navbar

const Nav = styled.nav`
  background-color: #fefefe;
  padding: 17px 0;
  position: relative;
`
const NavbarItem = styled.div`
  
`
const Logo = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3260A1;
`
const AddPostBtn = styled.a`
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translate(-50%, -12px);
  width: 139px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: #67BFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  transition: all 0.4s;
  cursor: pointer;
  &:hover{    
    background: #4eb3fc;
  }
`