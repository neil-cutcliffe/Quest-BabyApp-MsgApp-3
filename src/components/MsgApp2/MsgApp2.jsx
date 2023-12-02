/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card4 from 'src/components/Card4/Card4';
import LoginButtonFrame from 'src/components/LoginButtonFrame/LoginButtonFrame';

const MsgApp21 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `932px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Quest = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  width: `430px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const GridFrame = styled('div')({
  borderRadius: `0px`,
  display: `grid`,
  position: `relative`,
  isolation: `isolate`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
  height: `auto`,
  gridTemplateColumns: `repeat(auto-fit, minmax(430px, 1fr))`,
  columnGap: `10px`,
  rowGap: `10px`,
  width: `100%`,
});

const Card41 = styled(Card4)(({ theme }) => ({
  width: `390px`,
  margin: `0px`,
}));

const LoginButtonFrame1 = styled(LoginButtonFrame)(({ theme }) => ({
  width: `410px`,
  margin: `10px 0px 0px 0px`,
  position: `sticky`,
  bottom: `0`,
  zIndex: `3000`,
}));

const InternalLink = styled(Link)({
  width: `410px`,
  textDecoration: `none`,
});

function MsgApp2(props) {
  return (
    <MsgApp21 className={props.className}>
      <Quest>
        <GridFrame>
          {props.posts &&
            props.posts.map((mypost, index) => {
              return <Card41 key={index} post={mypost} />;
            })}
        </GridFrame>
        <InternalLink to="/login">
          <LoginButtonFrame1 />
        </InternalLink>
      </Quest>
    </MsgApp21>
  );
}

export default MsgApp2;
