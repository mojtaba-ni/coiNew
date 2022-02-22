import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { createTheme ,ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import axios from 'axios'
import './sign.css'

export default () => {
    const theme = createTheme({
        palette: {
          primary: green,
        },
      });
      const Navigate = useNavigate()
      const [data, setData] = useState({email:'', password:''})
     
     
      const FormHandler = (e) => {
        setData({...data , [e.target.name]:e.target.value}) 
      }
      const SubmitFormHandler = (e) => {
         e.preventDefault()   
        const postData = async() => {
            try {
                const res = await axios.post('/signin',data)
                console.log(res)
                Navigate('/',{replace:true})
            } catch (error) {
                console.log("error")
                console.log(error.response)
            }    
        
        }
        postData()
        setData({email:'', password:''})
       
   
      }
    return (
        <div className='whole_sign'>
            <Navbar/>
            <Container>
              <div className='whole_container'>
              
                    <Card  className='whole_card'> 
                        <form>
                            <div className="title">
                               <p> sign in</p>
                            </div>
                            <div className='form_row'>
                                <label className='form_lable' htmlFor="email">Email</label>
                                <input name='email' type="text" value={data.email} onChange={FormHandler}/>
                            </div>
                            <div className='form_row'>
                                <label className='form_lable' htmlFor="password">Password</label>
                                <input name='password' type="password"value={data.password}  onChange={FormHandler}/>
                            </div>
                            
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={SubmitFormHandler} >
                                        Submit
                                </Button>
                            </ThemeProvider>
                          
                        </form>
                    </Card >
              </div>
            </Container>
        </div>
  
    )
}

