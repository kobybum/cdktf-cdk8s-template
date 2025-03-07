import { CdkConfig } from '@cdklib/config'
import { z } from 'zod'

const schema = z.object({
    accountId: z.string(),
    region: z.string(),
    profile: z.string(),
})

export const awsConfig = new CdkConfig(schema)
    .set('dev', {
        accountId: '123456789012',
        region: 'us-east-1',
        profile: 'dev',
    })
    .set('prod', {
        accountId: '123456789012',
        region: 'us-central-1',
        profile: 'prod',
    })
