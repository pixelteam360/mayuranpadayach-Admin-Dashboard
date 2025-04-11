import TopFlagUserTable from '@/components/modules/Dashboard/TopFlagUserTable';
import PageHeader from '@/components/shared/PageHeader';
import React from 'react';

const ProfilePage = () => {
    return (
        <div>
            <PageHeader title='All Flag Profile'/>
            <TopFlagUserTable />
        </div>
    );
};

export default ProfilePage;