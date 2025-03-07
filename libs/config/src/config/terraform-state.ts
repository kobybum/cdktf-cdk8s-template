import { CdkConfig } from '@cdklib/config'
import { z } from 'zod'

const schema = z.object({
    bucketName: z.string(),
})

export const terraformStateConfig = new CdkConfig(schema)
    .set('dev', {
        bucketName: 'dev-terraform-state',
    })
    .set('prod', {
        bucketName: 'prod-terraform-state',
    })
