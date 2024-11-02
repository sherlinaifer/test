import { Fragment } from "react"
import { Navbar,Nav,Container,Image, Carousel, Card, Button, Stack, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import './Ecommerce.css'
const Ecommerce=()=>{
    return  <Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home"><Image src="./logo.png" height={100}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#collections">Collections</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Carousel nextIcon={<IoMdArrowDroprightCircle size={30} />} prevIcon={<IoMdArrowDropleftCircle size={30}/>}>
      <Carousel.Item>
        <Image src="./banner1.jpg" className="w-100"></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="./banner2.jpg" className="w-100"></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="./banner3.jpg" className="w-100"></Image>
      </Carousel.Item>
    </Carousel>
   <div className="overflow-auto d-flex">
    <Card style={{ width: '18rem',margin:"20px" }} className="flex-shrink-0"  >
      <Card.Img variant="top" src="./samsung.webp" style={{aspectRatio: 1/1, objectFit:"contain", height:"50%", width:"100%"}}/>
      <Card.Body>
        <Card.Title>SAMSUNG Galaxy A14 5G</Card.Title>
        <Card.Text className="text-truncate">
        This phone draws attention wherever you go with its sleek, minimalist appearance.
        </Card.Text>
        <Button variant="primary"><MdOutlineAddShoppingCart/> Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:"20px" }} className="flex-shrink-0">
      <Card.Img variant="top" src="./shoe.webp" style={{aspectRatio: 1/1, objectFit:"contain", height:"50%", width:"100%"}}/>
      <Card.Body>
        <Card.Title> NIKE Revolution 6 Running Shoes</Card.Title>
        <Card.Text className="text-truncate">
        Revolution 6 Running Shoes For Men 
        </Card.Text>
        <Button variant="primary"><MdOutlineAddShoppingCart/> Add to Cart</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',margin:"20px" }} className="flex-shrink-0">
      <Card.Img variant="top" src="./watch.webp" style={{aspectRatio: 1/1, objectFit:"contain", height:"50%", width:"100%"}}/>
      <Card.Body>
        <Card.Title>Minimalists Analog Watch</Card.Title>
        <Card.Text className="text-truncate">
        Minimalists Analog Watch 
        </Card.Text>
        <Button variant="primary"><MdOutlineAddShoppingCart/> Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:"20px" }} className="flex-shrink-0">
      <Card.Img variant="top" src="./lamp.webp" style={{aspectRatio: 1/1, objectFit:"contain", height:"50%", width:"100%"}}/>
      <Card.Body>
        <Card.Title> Decor House Wooden Base Table Lamp</Card.Title>
        <Card.Text className="text-truncate">
            Introducing the Decor House Brown Table Decorative Lighting Lamp with a Wooden Base. Elevate your home with this exquisite lamp, seamlessly blending style and functionality. 
        </Card.Text>
        <Button variant="primary"><MdOutlineAddShoppingCart/> Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:"20px" }} className="flex-shrink-0">
      <Card.Img variant="top" src="./dell.jpg" style={{aspectRatio: 1/1, objectFit:"contain", height:"50%", width:"100%"}}/>
      <Card.Body>
        <Card.Title> DELL Intel Core i3 12th Gen 1215U </Card.Title>
        <Card.Text className="text-truncate">
        With a PCIe SSD and a 12th-generation Intel Core i3 processor incorporated into this Dell laptop, you can enjoy a quick yet peaceful performance. Additionally, ComfortView software lowers hazardous blue light emissions to keep your eyes pleasant during prolonged viewing sessions. Furthermore, enjoy the large keycaps and a big touchpad that make it simple to access your content. Moreover, the FHD display of this laptop is surrounded by a stylish, slim bezel on three sides, enhancing your visual experience.
        </Card.Text>
        <Button variant="primary"><MdOutlineAddShoppingCart/> Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
 <div className="d-flex flex-column flex-md-row" style={{padding:"20px"}}>
    <Stack>
    <h3>Contact Us</h3>
    <Stack>
        <div>Email: shopify@gmail.com</div>
        <div>Phone: +91 8542682136</div>
    </Stack>
    </Stack>
    <Form className="w-50">
        <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control type="text" placeholder="Enter your name..."/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Message: </Form.Label>
            <Form.Control as={"textarea"} rows={4} placeholder="Enter Message..." style={{resize:"none"}}/>
        </Form.Group>
    </Form>
 </div>
   </Fragment>
    

}
export default Ecommerce