import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";


export function GameCardSkeleton() {
  return (
    <Card minHeight={"300px"}>
      <Skeleton height={"200px"}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
}
