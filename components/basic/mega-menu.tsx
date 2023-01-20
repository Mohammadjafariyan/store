import { HoverCard, Button, Text, Group } from '@mantine/core';

export function MegaMeno() {
    return (
        <Group >
            <HoverCard width='90vw' shadow="md" position="bottom-start" >
                <HoverCard.Target>

                    <b >
                        <a className="dropbtn bottom-line-hover text-dark" href="#">
                            <i className="pi pi-bars ps-1"></i>
                            دسته بندی کالا ها
                        </a>
                    </b>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  

                    <Text size="sm">
                        Hover card is revealed when user hovers over target element, it will be hidden once
                        mouse is not over both target and dropdown elements
                    </Text>
                </HoverCard.Dropdown>
            </HoverCard>
        </Group>
    );
}