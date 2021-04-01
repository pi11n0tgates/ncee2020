import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import React, { useState, useEffect } from 'react'
import { Alert, Form, FormControl, Button, ButtonGroup, Nav, Tab, Row, Col, Table, InputGroup, Dropdown, DropdownButton, ListGroup, Image, Card, CardGroup, CardDeck, Badge, Tabs, FormGroup, Carousel } from 'react-bootstrap'
import { Navbar, NavDropdown, Breadcrumb, Pagination } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import constants from '../utils/constants'
import SVG from '../utils/svg'
import { makePaginations } from './components/pagination'
import { timeStringConverter } from '../utils/util'
import { TopicCard, TopicList } from './components/topic'
import { PostCard, NewPostForm } from './components/post'
import { LoginForm } from './components/user'
import axios from 'axios'


const HomePage = (props) => {
  const today = new Date()
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    if (window.localStorage.getItem('user')) {
      setUser(JSON.parse(window.localStorage.getItem('user')))
    }
  }, [])

  return (
    <>
      <div className="container">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title as="h3">
                {
                  (user) ? (<><a href={`/user/${user.username}`}>{user.name}</a>，</>) : null
                }
                欢迎使用
              </Card.Title>
            </Col>
            {
              (user) ? null : (
                <Col className="d-lg-none" xs="auto">
                  <Card.Text>
                    <Button variant="link" className="p-0 text-success" onClick={() => { history.push('/login'); history.go() }}>
                        登入
                    </Button>
                  </Card.Text>
                </Col>
              )
            }
          </Row>
          <Card.Text>
            <p>
              <Alert variant="info">
                今天是 <b>{today.toLocaleString('zh', constants.shortDateOptions)}</b>，距离高考还有 <b className="text-primary">{Math.floor((constants.dayOfNCEE.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))}</b> 天
                </Alert>
              <Button variant="link" size="sm" className="text-success"
                onClick={() => {
                  history.push('/institute')
                }}
              >查学校→</Button>
              <br />
              <Button variant="link" size="sm" className="text-success"
                onClick={() => {
                  history.push('/forum')
                }}
              >讨论区→</Button>
              <br />
              <Button variant="link" size="sm" className="text-success"
                onClick={() => {
                  history.push('/stats')
                }}
              >看数据→</Button>
            </p>
          </Card.Text>
          <Card.Title as="h3">
            推荐院校
        </Card.Title>
          <Card.Text>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card.Text>
          <Card.Title as="h3">
            热门话题
        </Card.Title>
          <Card.Text>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card.Text>

        </Card.Body>
      </div>
    </>
  )
}

export default HomePage