import TopFlagUserTable from '@/components/modules/Dashboard/TopFlagUserTable';
import PageHeader from '@/components/shared/PageHeader';
import React from 'react';

const RemovePage = () => {
    return (
        <div>
            <PageHeader title='Remove Request'/>
            <TopFlagUserTable />
        </div>
    );
};

export default RemovePage;