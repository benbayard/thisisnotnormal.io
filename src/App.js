import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="margin-vertical">This Is Not Normal</h1>
        </div>
        <p className="text large">
          In light of recent events, the pressure to normalize and accept
          that our next President is, in fact, normal will be growing. However,
          it is important to realize that this election and this president are
          not normal. We, as people who do not want to accept an openly bigoted,
          racist, misoginist President must remind ourselves that we cannot
          normalize.
        </p>
        <p className="text large">
          This website is that reminder. We will send you a reminder through your
          calendar and a bi-monthly letter through the mail reminding you that
          this is not normal and things you can do to help change it.
        </p>

        <Button
          intent={0}
          className="pt-large pt-minimal text large margin-vertical center block"
          text="Get Started"
        />
      </div>
    );
  }
}

export default App;
