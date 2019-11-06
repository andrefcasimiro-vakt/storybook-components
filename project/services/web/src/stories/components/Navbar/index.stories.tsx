import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './index';

const stories = storiesOf('Navbar', module);

stories.add(
  'default',
    () => {
        return (
            <Navbar>
                <section>
                    <h2>Logo</h2>
                </section>

                <ul>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>
                        Contact

                        <ul>
                            <a href='#'>Sublink 1</a>
                            <a href='#'>Sublink 2
                                <ul>
                                    <a href='#'>Sublink 1</a>
                                    <a href='#'>Sublink 2</a>
                                </ul>
                            </a>
                        </ul>
                    </a>
                    <a href='#'>Login</a>
                </ul>
            </Navbar>
        );
    }
);
