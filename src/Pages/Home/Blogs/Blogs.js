import React from 'react';
import './Blogs.css'
import blog1 from '../../../images/All logo/mongo-db-and-node-js.jpg'
import blog2 from '../../../images/All logo/js-and-node-js.jpg'
import blog3 from '../../../images/All logo/sql-and-nosql.jpg'
import blog4 from '../../../images/All logo/jwt.jpg'


const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center fw-bold my-5'>BLOGS</h1>
            <div className='align-items-center blogs-container mb-5'>
                <div className=''>
                    <img className='' src={blog2} alt="" srcset="" />
                </div>
                <div className=''>
                    <h5 className='fw-bold'>
                        1. Difference between javascript and node js ?
                    </h5>
                    <div className='blogs-text'>
                        <div className='me-2'>
                            <p><span className='fw-bold'>Javascript</span></p>
                            <p>1) Javascript is a programming language that is used for writing scripts on the website. 2) Javascript can only be run in the browsers. 3)It is basically used on the client-side. 4)Javascript is capable enough to add HTML and play with the DOM. 5) Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 6)Javascript is used in frontend development. 7) Some of the javascript frameworks are RamdaJS, TypedJS, etc. 8) It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </p>
                        </div>
                        <div className='ms-2'>
                            <p><span className='fw-bold'>NodeJS</span></p>
                            <p>1) NodeJS is a Javascript runtime environment. 2) We can run Javascript outside the browser with the help of NodeJS. 3) It is mostly used on the server-side. 4) Nodejs does not have capability to add HTML tags. 5) V8 is the Javascript engine inside of node.js that parses and runs Javascript. 6) Nodejs is used in server-side development. 7) Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 8) Nodejs is written in C, C++ and Javascript.  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='align-items-center blogs-container mb-5'>
                <div className=''>
                    <img className='' src={blog1} alt="" srcset="" />
                </div>
                <div className=''>
                    <h5 className='fw-bold'>
                        2. When should we use node js and when should use mongodb ?
                    </h5>
                    <p><span className='fw-bold'>When should we use Nodejs?</span> Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                    <p><span className='fw-bold'>When should we use MongoDB?</span>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</p>
                </div>
            </div>
            <div className='align-items-center blogs-container mb-5'>
                <div className=''>
                    <img className='' src={blog3} alt="" srcset="" />
                </div>
                <div className=''>
                    <h5 className='fw-bold'>
                        3. Difference between sql and nosql ?
                    </h5>
                    <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>
                    <div className='blogs-text'>
                        <div className='me-2'>
                            <p><span className='fw-bold'>SQL</span></p>
                            <p>1) These databases have fixed or static or predefined schema. 2) These databases are not suited for hierarchical data storage. 3)These databases are not suited for hierarchical data storage. 4)These databases are best suited for complex queries 5) Vertically Scalable. 6)Follows ACID property. </p>
                        </div>
                        <div className='ms-2'>
                            <p><span className='fw-bold'>NoSQL</span></p>
                            <p>1) Non-relational or distributed database system. 2) They have dynamic schema. 3) These databases are best suited for hierarchical data storage. 4) These databases are not so good for complex queries. 5) Horizontally scalable. 6) Follows CAP(consistency, availability, partition tolerance).  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='align-items-center blogs-container mb-5'>
                <div className=''>
                    <img className='' src={blog4} alt="" srcset="" />
                </div>
                <div className=''>
                    <h5 className='fw-bold'>
                        1. What is the purpose of JWT and how does it work ?
                    </h5>
                    <p><span className='fw-bold'>What is the purpose of JWT?</span>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p><span className='fw-bold'>How JWT Works?</span>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;