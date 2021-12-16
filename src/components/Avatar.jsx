import React, { memo } from 'react';

const Avatar = memo(({ url, name }) => (
  <div>
    {!!url ? (
      <img src={url} alt='avatar' className='avatar-img' />
    ) : (
      <div className='avatar-txt'>{name.charAt(0)}</div>
      //<div className='avatar-txt'>{name}</div>
    )}
  </div>
));

export default Avatar;
