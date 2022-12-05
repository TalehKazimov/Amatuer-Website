import React from 'react'

function Footer() {
    return (
        <div id='footer'>
            <footer>
            <table>
                <thead>
                    <tr>
                        <th>
                            <p>QUICK LINKS</p>
                            <div className='outline'></div>
                        </th>
                        <th>
                            <p>ARCHIVES</p>
                            <div className='outline'></div>
                        </th>
                        <th>
                            <p>SOCIAL</p>
                            <div className='outline'></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Home
                        </td>
                        <td>
                            January 2018
                        </td>
                        <td>
                            Facebook
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Blog
                        </td>
                        <td>
                            December 2017
                        </td>
                        <td>
                            Instagram
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Styles
                        </td>
                        <td>
                            November2017
                        </td>
                        <td>
                            Twitter
                        </td>
                    </tr>
                    <tr>
                        <td>
                            About
                        </td>
                        <td>
                            October2017
                        </td>
                        <td>
                            Pinterest
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h2>
                    <p>
                        Our Newsletter
                    </p>
                    <div className="outline"></div>
                </h2>
                <p>
                    Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.
                </p>
                <input type="text" id='f-input' />
                <label htmlFor="f-input" className='send'>
                    Send
                </label>
            </div>
        </footer>
        </div>
        
    )
}

export default Footer