import { S3Backend, TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { awsConfig, getEnvId, terraformStateConfig } from '@repo/config'
import { AwsProvider } from '@cdktf/provider-aws/lib/provider'

/**
 * Custom terraform stack
 *
 * - Initialize terraform state backend to S3
 * - Tag resources with the stack name (where possible)
 */
export class BaseStack extends TerraformStack {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        const envId = getEnvId(this)
        const { bucketName } = terraformStateConfig.get(this)
        const { region, profile } = awsConfig.get(this)

        new AwsProvider(this, 'aws', {
            profile,
            region,
        })

        new S3Backend(this, {
            bucket: bucketName,
            key: `${envId}/${id}`,
            profile,
            region,
        })
    }
}
