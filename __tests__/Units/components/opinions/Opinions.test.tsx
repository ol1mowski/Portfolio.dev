import { render, screen } from '@testing-library/react';
import Opinions from '../../../../components/pages/Opinions/Opinions.page';
import Opinion from '../../../../components/pages/Opinions/Opinion/Opinion.component';
import React from 'react';


jest.mock('../../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions', () => ({
  getOpinions: jest.fn()
}));


jest.mock('../../../../components/pages/Opinions/OpinionHeader/OpinionHeader.component', () => {
  return function MockOpinionHeader() {
    return <div data-testid="opinion-header">Opinie Moich Klientów</div>;
  };
});

jest.mock('../../../../components/pages/Opinions/SectionName/SectionName.component', () => {
  return function MockSectionName() {
    return <div data-testid="section-name">Opinie</div>;
  };
});

jest.mock('../../../../components/pages/Opinions/OpinionsWrapper/OpinionsWrapper.component', () => {
  return function MockOpinionsWrapper({ children }: { children: React.ReactNode }) {
    return <div data-testid="opinions-wrapper">{children}</div>;
  };
});


jest.mock('../../../../components/pages/Opinions/Opinion/Opinion.component', () => {
  return function MockOpinion({ opinion }: any) {
    return (
      <article data-testid="opinion-item">
        <p>{opinion.content}</p>
        <a href={opinion.link}>Zobacz Pełną Opinię</a>
        <div>
          <img src={opinion.companyImage} alt="Company Logo" />
          <span>{opinion.companyName}</span>
        </div>
      </article>
    );
  };
});

const mockOpinionsData = [{
  opinions: [
    {
      content: 'Świetna współpraca!',
      link: 'https://example.com/1',
      companyImage: '/company1.jpg',
      companyName: 'Firma 1'
    },
    {
      content: 'Profesjonalna obsługa!',
      link: 'https://example.com/2',
      companyImage: '/company2.jpg',
      companyName: 'Firma 2'
    }
  ]
}];

describe('Opinions Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const { getOpinions } = require('../../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions');
    (getOpinions as jest.Mock).mockReset();
  });

  it('renders all opinions components correctly', async () => {
    const { getOpinions } = require('../../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions');
    (getOpinions as jest.Mock).mockResolvedValue(mockOpinionsData);

    render(await Opinions());

    expect(screen.getByTestId('section-name')).toBeInTheDocument();
    expect(screen.getByTestId('opinion-header')).toBeInTheDocument();
    expect(screen.getByTestId('opinions-wrapper')).toBeInTheDocument();

    const opinionItems = screen.getAllByTestId('opinion-item');
    expect(opinionItems).toHaveLength(2);

    expect(screen.getByText('Świetna współpraca!')).toBeInTheDocument();
    expect(screen.getByText('Firma 1')).toBeInTheDocument();
  });

  it('shows error message when fetching fails', async () => {
    const { getOpinions } = require('../../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions');
    (getOpinions as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(await Opinions());

    expect(screen.getByText('Error loading Opinions section.')).toBeInTheDocument();
  });

  it('shows error message when no opinions data is returned', async () => {
    const { getOpinions } = require('../../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions');
    (getOpinions as jest.Mock).mockResolvedValue([]);

    render(await Opinions());

    expect(screen.getByText('Error loading Opinions section.')).toBeInTheDocument();
  });

  it('renders with correct section id', async () => {
    const { getOpinions } = require('../../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions');
    (getOpinions as jest.Mock).mockResolvedValue(mockOpinionsData);

    render(await Opinions());

    const section = screen.getByRole('contentinfo');
    expect(section).toHaveAttribute('id', 'opinions');
  });
});

describe('Opinion Component', () => {
  const mockOpinion = {
    content: 'Test opinion',
    link: 'https://example.com',
    companyImage: '/test.jpg',
    companyName: 'Test Company'
  };

  it('renders opinion content correctly', () => {
    render(<Opinion opinion={mockOpinion} />);

    expect(screen.getByText('Test opinion')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
