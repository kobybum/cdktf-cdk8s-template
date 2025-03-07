import { Vpc as VpcModule } from '@module/terraform-aws-modules/aws/vpc'
import { vpcConfig } from '@repo/config'
import { Construct } from 'constructs'
import { BaseStack } from './base-stack'

/**
 * This is an example stack that deploys a VPC using some shared configuration.
 */
export class VpcStack extends BaseStack {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        const { cidr, availabilityZones: azs, privateSubnets, publicSubnets } = vpcConfig.get(this)

        new VpcModule(this, 'my-vpc', {
            name: 'my-vpc',
            cidr: cidr,
            azs: azs,
            privateSubnets,
            publicSubnets,
        })
    }
}
