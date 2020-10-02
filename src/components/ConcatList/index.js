import React from 'react';
import PropTypes from 'prop-types';
import StyledConcatList, { Contacts } from './style';
import FilterList from 'components/FilterList';
import ContactCard from 'components/ContactCard';
import useStaggeredList from 'hooks/useStaggeredList';
import { animated } from 'react-spring';

function ConcatList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledConcatList {...rest}>
      <FilterList options={['新添加优先', '按姓名排序']} actionLabel="添加好友">
        <Contacts>
          {new Array(10).fill(0).map((_, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <ContactCard key={i} />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledConcatList>
  );
}

ConcatList.propTypes = {
  children: PropTypes.any,
};

export default ConcatList;
