'use client'

import Link from 'next/link';
import React from 'react';
import JumpingText from '../(components)/jumpingtext/page';

const Work = () => {
    return ( 
        <div>
            Work Page
            <Link href={'/'}>
                 <JumpingText text='Kaleb Maulding'/>
            </Link>
        </div>
     );
}
 
export default Work;