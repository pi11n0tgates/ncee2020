import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'
import React, { useState, useEffect } from 'react'
import { Alert, Form, FormControl, Button, ButtonGroup, Nav, Tab, Row, Col, Table, InputGroup, Dropdown, DropdownButton, ListGroup, Image, Card, CardGroup, CardDeck, Badge, Tabs, FormGroup } from 'react-bootstrap'
import { Navbar, NavDropdown, Breadcrumb, Pagination } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect, useHistory, useLocation, useParams } from 'react-router-dom'
import constants from '../../utils/constants'
import SVG from '../../utils/svg'
import { makePaginations } from './pagination'
import { timeStringConverter } from '../../utils/util'
import { TopicCard, TopicList } from './topic'
import axios from 'axios'

const PostCard = (props) => {
  const expanded = props.expanded
  const index = props.index
  const host = props.host
  const setReplyTo = props.setReplyTo

  const post = props.post
  const history = useHistory()

  // custom dropdown
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  return (
    <>
      <ListGroup.Item action={!expanded} onClick={(expanded) ? null : () => { history.push(`/post/${post.id}`);history.go() }}>
        <Row>
          <Col xs="auto" className="pr-0">
            <Image width={48} height={48} />
          </Col>
          <Col>
            <Row>
              <Col>
                <small>
                  {(host) ? (<SVG className="mr-2" variant="person" fill />) : (<></>)}
                  <a href={`/user/${post.author}`}><b>{post.author}</b></a>
                  <span className="d-inline-block">
                    ・{timeStringConverter(post.createdAt)}
                  </span>
                </small>
              </Col>
              <Col xs="auto">
                <code>
                  #{index}
                </code>
              </Col>
            </Row>
            <Row>
              <Col>
                {post.content}
              </Col>
            </Row>
            <Row>
              {
                // photos columns
              }
            </Row>
            <Row>
              <Col style={{ textAlign: "right" }}>
              </Col>
              {
                (setReplyTo) ? (
                  <Col xs="auto">
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle} className="pl-2 pr-2">
                        <SVG variant="three-dots" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item eventKey="1"
                          href="#replytextarea"
                          onClick={(e) => { e.stopPropagation(); setReplyTo(post.id) }}
                        >
                          回复
                                  </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          转发
                                  </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          关注此用户
                                  </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                ) : null
              }
            </Row>
            {
              (expanded) ? (
                <Row>
                  <Col>
                    123
                  </Col>
                </Row>
              ) : null
            }
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  )
}


export { PostCard };