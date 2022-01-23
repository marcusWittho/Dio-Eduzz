import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../button';

test('Render button with text', () => {
  render(<Button>Test</Button>);

  const buttonEl = screen.getByText('Test')

  expect(buttonEl).toBeInTheDocument();
});
