
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import Showcase from '../pages/Showcase';

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: "1", title: "Test Installation", description: "Vitals verification.", technologies: "Vitest", likes: 2 }
    ]),
  })
);

describe('Project Showcase Feature Suite', () => {
  it('confirms layout rendering engine triggers successfully', () => {
    render(<Showcase />);
    expect(screen.getByText('Active Software Matrix')).toBeInTheDocument();
  });
});