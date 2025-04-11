import ReportCard from '@/components/modules/Report/ReportCard';
import PageHeader from '@/components/shared/PageHeader';
import React from 'react';

const ReportPage = () => {
    return (
        <div>
            <PageHeader title='All Report'/>
            <ReportCard />
        </div>
    );
};

export default ReportPage;