import React from 'react';
import './Blogs.css'
import blog1 from '../../../images/All logo/mongo-db-and-node-js.jpg'

const Blogs = () => {
    return (
        <div className='container'>
            <div className='row align-items-center blogs-container my-5'>
                <div className='col-md-5 col-sm-12'>
                    <img className='' src={blog1} alt="" srcset="" />
                </div>
                <div className='col-md-7 col-sm-12'>
                    <h5 className='fw-bold'>
                        1. When should we use node js and when should use mongodb ?
                    </h5>
                    <p><span className='fw-bold'>When should we use Nodejs?</span> Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                    <p><span className='fw-bold'>When should we use MongoDB?</span>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;